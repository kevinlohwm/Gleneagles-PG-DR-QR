import React from 'react';
import { Doctor } from '../types/doctor';
import DoctorCard from './DoctorCard';

interface DoctorsListProps {
  doctors: Doctor[];
  searchQuery: {
    name: string;
    specialty: string;
  };
}

const DoctorsList: React.FC<DoctorsListProps> = ({ doctors, searchQuery }) => {
  if (doctors.length === 0) {
    return (
      <div className="text-center py-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">No doctors found</h3>
        <p className="text-gray-600">
          Try adjusting your search criteria or browse all specialists.
        </p>
      </div>
    );
  }

  let resultsMessage = `Showing all doctors`;
  if (searchQuery.name && searchQuery.specialty) {
    resultsMessage = `Results for "${searchQuery.name}" in ${searchQuery.specialty}`;
  } else if (searchQuery.name) {
    resultsMessage = `Results for "${searchQuery.name}"`;
  } else if (searchQuery.specialty) {
    resultsMessage = `All doctors in ${searchQuery.specialty}`;
  }

  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-lg font-medium text-gray-700">{resultsMessage}</h2>
        <p className="text-sm text-gray-600">Found {doctors.length} doctor(s)</p>
      </div>
      
      <div className="space-y-6">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default DoctorsList;