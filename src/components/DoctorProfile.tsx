import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Phone, MapPin, Languages, Award, Printer, ArrowLeft } from 'lucide-react';
import { Doctor, DoctorContact } from '../types/doctor';
import ClinicalHoursTable from './ClinicalHoursTable';
import QRCodeGenerator from './QRCodeGenerator';
import PrintableProfile from './PrintableProfile';
import { doctors } from '../data/doctors';

const DoctorProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const doctor = doctors.find((doc) => doc.id === id);
  
  if (!doctor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Doctor not found</h2>
          <p className="text-gray-600 mb-6">The doctor you're looking for doesn't exist or has been removed.</p>
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to search
          </Link>
        </div>
      </div>
    );
  }
  
  const doctorContact: DoctorContact = {
    name: doctor.name,
    phoneNo: doctor.phoneNo,
    location: doctor.location,
    suiteNo: doctor.suiteNo,
    specialty: doctor.specialty,
  };
  
  const handlePrint = () => {
    window.print();
  };
  
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-8 print:hidden">
        <div className="mb-6">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-primary-600 hover:text-primary-800 transition-colors"
          >
            <ArrowLeft size={16} className="mr-1" />
            Back to results
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Doctor Header */}
          <div className="bg-gradient-to-r from-secondary-500 to-secondary-700 text-white p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h1 className="text-2xl font-bold">{doctor.name}</h1>
                <div className="flex items-center mt-1">
                  <span className="text-lg">{doctor.specialty}</span>
                  <span className="mx-2">•</span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white text-secondary-800">
                    {doctor.type}
                  </span>
                </div>
              </div>
              <button
                onClick={handlePrint}
                className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 bg-white text-secondary-800 rounded-md hover:bg-gray-100 transition-colors"
              >
                <Printer size={16} className="mr-2" />
                Print Profile
              </button>
            </div>
          </div>
          
          {/* Doctor Information */}
          <div className="p-6">
            <div className="flex flex-col md:flex-row">
              {/* Left column - Doctor details */}
              <div className="flex-1">
                {doctor.imageUrl && (
                  <img
                    src={doctor.imageUrl}
                    alt={doctor.name}
                    className="w-full md:w-64 h-64 object-cover rounded-lg mb-6 md:float-left md:mr-6"
                  />
                )}
                
                {doctor.subSpecialty && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-secondary-800">Sub-specialty</h3>
                    <p className="text-gray-700">{doctor.subSpecialty}</p>
                  </div>
                )}
                
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <Award size={20} className="mr-2 text-primary-500" />
                    <h3 className="text-lg font-semibold text-secondary-800">Qualifications</h3>
                  </div>
                  <ul className="list-disc list-inside ml-6 text-gray-700">
                    {doctor.qualifications.map((qualification, index) => (
                      <li key={index}>{qualification}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <Languages size={20} className="mr-2 text-primary-500" />
                    <h3 className="text-lg font-semibold text-secondary-800">Languages Spoken</h3>
                  </div>
                  <div className="ml-6 flex flex-wrap gap-2">
                    {doctor.languagesSpoken.map((language) => (
                      <span
                        key={language}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <MapPin size={20} className="mr-2 text-primary-500" />
                    <h3 className="text-lg font-semibold text-secondary-800">Location</h3>
                  </div>
                  <p className="ml-6 text-gray-700">{doctor.location}, Suite {doctor.suiteNo}</p>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <Phone size={20} className="mr-2 text-primary-500" />
                    <h3 className="text-lg font-semibold text-secondary-800">Contact</h3>
                  </div>
                  <p className="ml-6 text-gray-700">{doctor.phoneNo}</p>
                </div>
              </div>
              
              {/* Right column - QR Code */}
              <div className="md:w-1/4 mt-6 md:mt-0 flex flex-col items-center">
                <div className="bg-gray-50 p-6 rounded-lg w-full">
                  <h3 className="text-lg font-semibold text-secondary-800 text-center mb-4">
                    Save Contact Info
                  </h3>
                  <QRCodeGenerator doctorContact={doctorContact} />
                  <p className="mt-4 text-sm text-gray-600 text-center">
                    Scan this QR code to save the doctor's contact information to your phone.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Clinical Hours */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-secondary-800 mb-4">Clinical Hours</h3>
              <ClinicalHoursTable clinicalHours={doctor.clinicalHours} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Printable version */}
      <PrintableProfile doctor={doctor} />
    </>
  );
};

export default DoctorProfile;