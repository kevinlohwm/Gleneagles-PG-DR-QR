import React from 'react';
import { Phone, MapPin, GraduationCap, ExternalLink } from 'lucide-react';
import { Doctor } from '../types/doctor';
import { Link } from 'react-router-dom';

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  return (
    <div className="block w-full bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 h-48 md:h-auto">
          <img 
            src={doctor.imageUrl} 
            alt={doctor.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4 md:p-6 flex-1">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
            <div>
              <h3 className="text-xl font-bold text-secondary-800">{doctor.name}</h3>
              <p className="text-primary-600 font-medium">{doctor.specialty}</p>
              {doctor.subSpecialty && (
                <p className="text-gray-600 text-sm">
                  <span className="font-medium">Sub-specialty:</span> {doctor.subSpecialty}
                </p>
              )}
            </div>
            <span className="mt-2 md:mt-0 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
              {doctor.type}
            </span>
          </div>
          
          <div className="mt-4 space-y-2">
            <div className="flex items-center text-gray-600">
              <GraduationCap size={16} className="mr-2 flex-shrink-0" />
              <span className="text-sm">{doctor.qualifications[0]}{doctor.qualifications.length > 1 ? `, ${doctor.qualifications[1]}` : ''}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin size={16} className="mr-2 flex-shrink-0" />
              <span className="text-sm">{doctor.location}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Phone size={16} className="mr-2 flex-shrink-0" />
              <span className="text-sm">{doctor.phoneNo}</span>
            </div>
          </div>
          
          <div className="mt-4">
            <span className="text-sm font-medium text-secondary-700">Languages:</span>
            <div className="mt-1 flex flex-wrap gap-1">
              {doctor.languagesSpoken.map((language) => (
                <span
                  key={language}
                  className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mt-4 flex justify-between items-center">
            <Link
              to={`/doctor/${doctor.id}`}
              className="text-primary-600 text-sm font-medium hover:underline"
            >
              View Profile →
            </Link>
            {doctor.appointmentLink && (
              <a
                href={doctor.appointmentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1 rounded-md bg-primary-500 text-white text-sm hover:bg-primary-600 transition-colors"
              >
                <ExternalLink size={14} className="mr-1" />
                Book Appointment
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;