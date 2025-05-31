import React from 'react';
import QRCode from 'react-qr-code';
import { DoctorContact } from '../types/doctor';

interface QRCodeGeneratorProps {
  doctorContact: DoctorContact;
  size?: number;
}

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({ 
  doctorContact,
  size = 128
}) => {
  // Generate vCard format for contact information
  const generateVCardData = (contact: DoctorContact): string => {
    return `BEGIN:VCARD
VERSION:3.0
FN:${contact.name}
ORG:Gleneagles Hospital Penang
TITLE:${contact.specialty} Specialist
TEL;WORK:${contact.phoneNo}
ADR;WORK:;;${contact.suiteNo}, ${contact.location};Penang;;;Malaysia
END:VCARD`;
  };

  const vCardData = generateVCardData(doctorContact);

  return (
    <div className="flex flex-col items-center">
      <div className="bg-white p-3 rounded-md shadow-sm">
        <QRCode 
          value={vCardData} 
          size={size} 
          level="M" 
        />
      </div>
      <p className="mt-2 text-sm text-gray-600 text-center">Scan to save contact</p>
    </div>
  );
};

export default QRCodeGenerator;