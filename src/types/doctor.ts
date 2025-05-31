export type DoctorType = 'Resident' | 'Sessional';

export type TimeSlot = {
  morning: boolean; // 0830 - 1300
  afternoon: boolean; // 1400 - 1630
  evening: boolean; // 1830 - 2030
};

export type ClinicalHours = {
  monday: TimeSlot;
  tuesday: TimeSlot;
  wednesday: TimeSlot;
  thursday: TimeSlot;
  friday: TimeSlot;
  saturday: TimeSlot;
  sunday: TimeSlot;
};

export interface Doctor {
  id: string;
  name: string;
  type: DoctorType;
  specialty: string;
  subSpecialty?: string;
  qualifications: string[];
  languagesSpoken: string[];
  location: string;
  suiteNo: string;
  phoneNo: string;
  clinicalHours: ClinicalHours;
  imageUrl?: string;
  appointmentLink?: string;
}

export interface DoctorContact {
  name: string;
  phoneNo: string;
  location: string;
  suiteNo: string;
  specialty: string;
}