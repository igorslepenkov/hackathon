import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { backend } from "../../services/backend";
import { IUser, IUserApi } from "../../types";

type InitialState = {
  error: string | null;
  user: IUserApi | null;
  isUserLoggedIn: boolean;
};

type SignInCred = {
  email: string;
  password: string;
};

const initialState: InitialState = {
  error: null,
  user: null,
  isUserLoggedIn: false,
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
  },
});

export { signIn, signUp };
export const { signOut } = userSlice.actions;
export default userSlice.reducer;
