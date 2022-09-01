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

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  role: "doctor" | "patient";
  phone: string;
  specialty?: string;
  document?: string;
  birthDate?: string;
}
