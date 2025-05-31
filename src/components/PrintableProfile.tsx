import React from 'react';
import { Doctor, DoctorContact } from '../types/doctor';
import ClinicalHoursTable from './ClinicalHoursTable';
import QRCodeGenerator from './QRCodeGenerator';
import { Phone, MapPin, Languages, Award } from 'lucide-react';

interface PrintableProfileProps {
  doctor: Doctor;
}

const PrintableProfile: React.FC<PrintableProfileProps> = ({ doctor }) => {
  const doctorContact: DoctorContact = {
    name: doctor.name,
    phoneNo: doctor.phoneNo,
    location: doctor.location,
    suiteNo: doctor.suiteNo,
    specialty: doctor.specialty,
  };

  return (
    <div className="hidden print:block p-8 max-w-[210mm] mx-auto bg-white">
      {/* Header with Hospital Logo and Doctor Info */}
      <div className="flex justify-between items-start mb-6">
        <img 
          src="/gpg_logo.png" 
          alt="Gleneagles Hospital Penang" 
          className="h-12"
        />
        <div className="text-right">
          <p className="text-sm text-gray-500">1, Jalan Pangkor,</p>
          <p className="text-sm text-gray-500">10050 Georgetown, Penang, Malaysia</p>
          <p className="text-sm text-gray-500">+604-222-9111</p>
        </div>
      </div>

      {/* Doctor Profile Information */}
      <div className="flex gap-6 mb-6">
        {/* Doctor Image */}
        {doctor.imageUrl && (
          <div className="w-40 h-48 flex-shrink-0">
            <img
              src={doctor.imageUrl}
              alt={doctor.name}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        )}

        {/* Doctor Details */}
        <div className="flex-1">
          <h2 className="text-xl font-bold text-secondary-800">{doctor.name}</h2>
          <div className="flex items-center mt-1">
            <span className="text-md text-primary-600 font-medium">{doctor.specialty}</span>
            <span className="mx-2 text-gray-400">•</span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
              {doctor.type}
            </span>
          </div>
          
          {doctor.subSpecialty && (
            <p className="text-gray-700 mt-2">
              <span className="font-medium">Sub-specialty:</span> {doctor.subSpecialty}
            </p>
          )}

          <div className="mt-4 grid grid-cols-1 gap-2">
            <div className="flex items-start">
              <Award size={16} className="mr-2 mt-1 text-gray-600" />
              <div>
                <p className="font-medium text-gray-800">Qualifications</p>
                <ul className="list-disc list-inside ml-1 text-sm text-gray-700">
                  {doctor.qualifications.map((qualification, index) => (
                    <li key={index}>{qualification}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="flex items-start">
              <Languages size={16} className="mr-2 mt-1 text-gray-600" />
              <div>
                <p className="font-medium text-gray-800">Languages Spoken</p>
                <p className="text-sm text-gray-700">{doctor.languagesSpoken.join(', ')}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <MapPin size={16} className="mr-2 mt-1 text-gray-600" />
              <div>
                <p className="font-medium text-gray-800">Location</p>
                <p className="text-sm text-gray-700">{doctor.location}, Suite {doctor.suiteNo}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone size={16} className="mr-2 mt-1 text-gray-600" />
              <div>
                <p className="font-medium text-gray-800">Phone Number</p>
                <p className="text-sm text-gray-700">{doctor.phoneNo}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* QR Code */}
        <div className="w-32 flex-shrink-0">
          <QRCodeGenerator doctorContact={doctorContact} size={128} />
        </div>
      </div>

      {/* Clinical Hours */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-secondary-800 mb-2">Clinical Hours</h3>
        <ClinicalHoursTable clinicalHours={doctor.clinicalHours} compact={true} />
      </div>

      {/* Footer */}
      <div className="mt-8 pt-4 border-t border-gray-200 text-center text-xs text-gray-500">
        <p>For appointments, please call {doctor.phoneNo}</p>
        <p className="mt-1">Information accurate as of {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default PrintableProfile;