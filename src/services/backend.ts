import axios from "axios";
import { IDoctor, IPatient, IUser } from "../types";
import { v4 as uuidv4 } from "uuid";

class Backend {
  private readonly BASE_URL = process.env.REACT_APP_HACKATHONE_API as string;
  private readonly API = axios.create({ baseURL: this.BASE_URL });
  private DB: IUser[] = [
    {
      id: uuidv4(),
      birthDate: "1876-07-31",
      email: "vasya_pupkin@yandex.be",
      name: "Vasya Pupkin",
      password: "test4",
      phone: "+375296458792",
      role: "patient",
    },
    {
      id: uuidv4(),
      birthDate: "1874-06-29",
      email: "vasya_pupkin@yandex.be",
      name: "Vasya Jorkin",
      password: "test5",
      phone: "+375296458793",
      role: "patient",
    },
    {
      document: "MR 1234567",
      email: "jora-kryj@alter.by",
      id: "f10199bc-9f0c-4e97-8dc9-477e10b02bc2",
      name: "Jora Kryjovnikov",
      password: "kryj123",
      phone: "+375175613495",
      role: "doctor",
      specialty: "Gynecologist",
    },
    {
      document: "MR 1234567895",
      email: "jora-los@alter.be",
      id: "f10199bc-9f0c-4e97-8dc9-477e10b02bc2",
      name: "Artem Kon",
      password: "kon123",
      phone: "+375175613495",
      role: "doctor",
      specialty: "Patoloanatom",
    },
  ];
  public getUsers = (): IUser[] => {
    return this.DB;
  };
  public getPatients = (): IUser[] => {
    return this.DB.filter((user) => user.role === "patient");
  };

  public getDoctors = (): IUser[] => {
    return this.DB.filter((user) => user.role === "doctor");
  };

  public createUser = (userCred: IPatient | IDoctor): IUser | null => {
    const newUser: IUser = Object.assign({}, userCred, { id: uuidv4() });
    if (this.DB.find((user) => user.email === newUser.email)) {
      alert("Such user allready exists");
      return null;
    }
    this.DB.push(newUser);
    return newUser;
  };

  public getRandomUser = (): IUser => {
    const random = Math.round(Math.random() * (3 - 0) + 0);
    return this.DB[random];
  };

  public getUserByID = (id: string): IUser | undefined => {
    return this.DB.find((user) => user.id === id);
  };
}

export const backend = new Backend();
