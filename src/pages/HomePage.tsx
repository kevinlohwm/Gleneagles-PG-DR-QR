import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import DoctorsList from '../components/DoctorsList';
import { doctors } from '../data/doctors';
import { Doctor } from '../types/doctor';
import { UserSearch, Users } from 'lucide-react';

const HomePage: React.FC = () => {
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>(doctors);
  const [searchQuery, setSearchQuery] = useState({
    name: '',
    specialty: '',
  });

  const handleSearch = (name: string, specialty: string) => {
    const filtered = doctors.filter((doctor) => {
      const nameMatch = !name || doctor.name.toLowerCase().includes(name.toLowerCase());
      const specialtyMatch = !specialty || doctor.specialty === specialty;
      return nameMatch && specialtyMatch;
    });
    
    setFilteredDoctors(filtered);
    setSearchQuery({ name, specialty });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-2">
          Find Your Specialist
        </h1>
        <p className="text-lg text-gray-600">
          Search for doctors at Gleneagles Hospital Penang by name or specialty
        </p>
      </div>
      
      <div className="mb-8">
        <SearchBar onSearch={handleSearch} />
      </div>
      
      {filteredDoctors.length === 0 && (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="flex justify-center mb-4">
            <UserSearch size={48} className="text-gray-400" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">No doctors found</h2>
          <p className="text-gray-600 mb-4">
            We couldn't find any doctors matching your search criteria.
          </p>
          <button
            onClick={() => handleSearch('', '')}
            className="inline-flex items-center px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors"
          >
            <Users size={16} className="mr-2" />
            View All Doctors
          </button>
        </div>
      )}
      
      {filteredDoctors.length > 0 && (
        <DoctorsList doctors={filteredDoctors} searchQuery={searchQuery} />
      )}
    </div>
  );
};

export default HomePage;