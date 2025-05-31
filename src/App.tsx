import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DoctorProfile from './components/DoctorProfile';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow-sm print:hidden">
          <div className="max-w-7xl mx-auto py-4 px-4">
            <div className="flex items-center justify-between">
              <a href="/" className="flex items-center text-secondary-800">
                <img 
                  src="/gpg_logo.png" 
                  alt="Gleneagles Hospital Penang" 
                  className="h-12"
                />
              </a>
              <nav>
                <a 
                  href="/" 
                  className="text-secondary-600 hover:text-secondary-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Doctor Directory
                </a>
              </nav>
            </div>
          </div>
        </header>
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/doctor/:id" element={<DoctorProfile />} />
          </Routes>
        </main>
        
        <footer className="bg-secondary-800 text-white py-8 print:hidden">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="mb-6 md:mb-0">
                <div className="flex items-center mb-4">
                  <img 
                    src="/gpg_logo.png" 
                    alt="Gleneagles Hospital Penang" 
                    className="h-8"
                  />
                </div>
                <p className="text-sm text-gray-300">
                  1, Jalan Pangkor, 10050 Georgetown, Penang, Malaysia
                </p>
                <p className="text-sm text-gray-300 mt-1">
                  +604-222-9111
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-primary-300 tracking-wider uppercase mb-3">
                    Quick Links
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="/" className="text-gray-300 hover:text-white text-sm">
                        Find a Doctor
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-300 hover:text-white text-sm">
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-300 hover:text-white text-sm">
                        Departments
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-sm font-semibold text-primary-300 tracking-wider uppercase mb-3">
                    Support
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-gray-300 hover:text-white text-sm">
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-300 hover:text-white text-sm">
                        FAQs
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-300 hover:text-white text-sm">
                        Appointments
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-700 md:flex md:items-center md:justify-between">
              <p className="text-sm text-gray-300">
                &copy; {new Date().getFullYear()} Gleneagles Hospital Penang. All rights reserved.
              </p>
              <div className="mt-4 md:mt-0">
                <div className="flex space-x-6">
                  <a href="#" className="text-gray-300 hover:text-white">
                    Privacy Policy
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Terms of Service
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;