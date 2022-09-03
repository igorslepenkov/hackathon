import axios from "axios";
import { IDoctorSchedule, IDoctorScheduleApi, IUser, IUserApi } from "../types";

export enum Endpoint {
  SING_UP = "register",
  SIGN_IN = "login",
  SCHEDULE = "schedule",
  SCHEDULE_GET = "schedule/doctor",
}

class Backend {
  private readonly BASE_URL = process.env.REACT_APP_HACKATHONE_API as string;
  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });
  public signUp = async (user: IUser): Promise<IUserApi> => {
    const response = await this.API.post(Endpoint.SING_UP, user, {
      auth: {
        username: "admin@gmail.com",
        password: "1111",
      },
    });
    console.log(response);
    return response.data;
  };
  public signIn = async (
    email: string,
    password: string
  ): Promise<IUserApi> => {
    const response = await this.API.post(
      Endpoint.SIGN_IN,
      { email, password },
      {
        auth: {
          username: "admin@gmail.com",
          password: "1111",
        },
      }
    );
    console.log(response);
    return response.data;
  };

  public setDoctorSchedule = async (doctorSchedule: IDoctorSchedule) => {
    const response = await this.API.post<IDoctorScheduleApi>(
      Endpoint.SCHEDULE,
      doctorSchedule,
      {
        auth: {
          username: "admin@gmail.com",
          password: "1111",
        },
      }
    );
    console.log(response);
    return response.data;
  };
  public getDoctorSchedule = async (doctorId: string) => {
    const response = await this.API.get<IDoctorScheduleApi>(
      `${Endpoint.SCHEDULE}/${doctorId}`
    );
    console.log(response);
    return response.data;
  };
}

export const backend = new Backend();
