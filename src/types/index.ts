export interface IDoctor {
  name: string;
  email: string;
  password: string;
  role: "DOCTOR";
  phone: string;
  specialty: "PAEDIATRIC" | "ONCOLOGIST" | "DENTIST";
  document: string;
}

export interface IPatient {
  name: string;
  email: string;
  password: string;
  role: "PATIENT";
  phone: string;
  birthDate: string;
}

export interface IUserApi extends IUser {
  id: string;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
  role: "DOCTOR" | "PATIENT";
  phone: string;
  specialty?: "PAEDIATRIC" | "ONCOLOGIST" | "DENTIST";
  document?: string;
  birthDate?: string;
}

export interface IDate {
  year: number;
  month: string;
  day: string;
  dayOfWeek: number;
}

export interface IDoctorSchedule {
  id: string;
  role: "DOCTOR" | "PATIENT";
  schedule: { start: string; end: string; date: string }[];
}

export type IDoctorScheduleApi = {
  userAccountId: string;
  start: string;
  end: string;
  date: string;
}[];
