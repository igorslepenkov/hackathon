import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { backend } from "../../services/backend";
import {
  IDoctorSchedule,
  IDoctorScheduleApi,
  IUser,
  IUserApi,
} from "../../types";

type InitialState = {
  error: string | null;
  user: IUserApi | null;
  isUserLoggedIn: boolean;
  userSchedule: IDoctorScheduleApi | null;
};

type SignInCred = {
  email: string;
  password: string;
};

const initialState: InitialState = {
  error: null,
  user: null,
  isUserLoggedIn: false,
  userSchedule: null,
};

const signIn = createAsyncThunk<IUserApi, SignInCred, { rejectValue: string }>(
  "user/signIn",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await backend.signIn(email, password);
      return response;
    } catch (err) {
      const newErr = err as AxiosError;
      return rejectWithValue(`Error ${newErr.code}`);
    }
  }
);

const signUp = createAsyncThunk<IUserApi, IUser, { rejectValue: string }>(
  "user/signUp",
  async (userCred, { rejectWithValue }) => {
    try {
      const response = await backend.signUp(userCred);
      return response;
    } catch (err) {
      const newErr = err as AxiosError;
      return rejectWithValue(`Error ${newErr.code}`);
    }
  }
);

const setUserSchedule = createAsyncThunk<
  IDoctorScheduleApi,
  IDoctorSchedule,
  { rejectValue: string }
>("user/setSchedule", async (schedule, { rejectWithValue }) => {
  try {
    const response = await backend.setDoctorSchedule(schedule);
    return response;
  } catch (err) {
    const newErr = err as AxiosError;
    return rejectWithValue(`Error ${newErr.code}`);
  }
});

const getUserSchedule = createAsyncThunk<
  IDoctorScheduleApi,
  string,
  { rejectValue: string }
>("user/getSchedule", async (id, { rejectWithValue }) => {
  try {
    const response = await backend.getDoctorSchedule(id);
    return response;
  } catch (err) {
    const newErr = err as AxiosError;
    return rejectWithValue(`Error ${newErr.code}`);
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signOut: (state) => {
      state.isUserLoggedIn = false;
      state.user = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(signUp.fulfilled, (state, action) => {
      if (action.payload) {
        state.user = action.payload;
        state.isUserLoggedIn = true;
      }
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      if (action.payload) {
        state.user = action.payload;
        state.isUserLoggedIn = true;
      }
    });

    builder.addCase(signUp.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload;
      }
    });
    builder.addCase(setUserSchedule.fulfilled, (state, action) => {
      state.userSchedule = action.payload;
    });
    builder.addCase(getUserSchedule.fulfilled, (state, action) => {
      state.userSchedule = action.payload;
    });
  },
});

export { signIn, signUp, setUserSchedule, getUserSchedule };
export const { signOut } = userSlice.actions;
export default userSlice.reducer;
