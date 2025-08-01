export interface Doctor {
  id: number;
  name: string;
  specialization: string;
  experience: string;
  profileImage: string;
  availability: string[];
}

export type Booking = {
  doctorId: number
  doctorName: string
  specialization: string
  profileImage: string
  patientName: string
  patientEmail: string
  slot: string
}

