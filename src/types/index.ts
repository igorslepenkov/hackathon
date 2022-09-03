export interface IDoctor {
  name: string;
  email: string;
  password: string;
  role: "doctor";
  phone: string;
  specialty: string;
  document: string;
}

export interface IPatient {
  name: string;
  email: string;
  password: string;
  role: "patient";
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
  role: "doctor" | "patient";
  phone: string;
  specialty?: string;
  document?: string;
  birthDate?: string;
}

export interface IDate {
  year: number;
  month: number;
  day: number;
  dayOfWeek: number;
}
