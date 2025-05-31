import React from 'react';
import { ClinicalHours } from '../types/doctor';

interface ClinicalHoursTableProps {
  clinicalHours: ClinicalHours;
  compact?: boolean;
}

const ClinicalHoursTable: React.FC<ClinicalHoursTableProps> = ({ 
  clinicalHours,
  compact = false
}) => {
  const days = [
    { key: 'monday', label: 'Monday' },
    { key: 'tuesday', label: 'Tuesday' },
    { key: 'wednesday', label: 'Wednesday' },
    { key: 'thursday', label: 'Thursday' },
    { key: 'friday', label: 'Friday' },
    { key: 'saturday', label: 'Saturday' },
    { key: 'sunday', label: 'Sunday' },
  ] as const;

  const timeSlots = [
    { key: 'morning', label: '0830 - 1300' },
    { key: 'afternoon', label: '1400 - 1630' },
    { key: 'evening', label: '1830 - 2030' },
  ] as const;

  return (
    <div className={`overflow-x-auto ${compact ? 'text-sm' : ''}`}>
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-gray-50">
            <th className="py-2 px-3 text-left font-medium text-gray-700 border border-gray-200">Days</th>
            {timeSlots.map((slot) => (
              <th 
                key={slot.key} 
                className="py-2 px-3 text-center font-medium text-gray-700 border border-gray-200"
              >
                {slot.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {days.map((day) => (
            <tr key={day.key} className="hover:bg-gray-50">
              <td className="py-2 px-3 font-medium border border-gray-200">
                {day.label}
              </td>
              {timeSlots.map((slot) => (
                <td 
                  key={`${day.key}-${slot.key}`} 
                  className="py-2 px-3 text-center border border-gray-200"
                >
                  {clinicalHours[day.key][slot.key] ? (
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-100 text-primary-800">
                      ✓
                    </span>
                  ) : (
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gray-100 text-gray-400">
                      -
                    </span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClinicalHoursTable;