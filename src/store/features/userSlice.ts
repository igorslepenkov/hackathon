import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { backend } from "../../services/backend";
import { IUser } from "../../types";

type InitialState = {
  user: IUser | null;
  isUserLoggedIn: boolean;
};

type SignInCred = {
  email: string;
  password: string;
};

const initialState: InitialState = {
  user: null,
  isUserLoggedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<SignInCred>) => {
      const { email, password } = action.payload;
      const response = backend.signIn(email, password);
      if (response && response !== "invalid password") {
        state.user = response;
        state.isUserLoggedIn = true;
      }
    },
    signOut: (state) => {
      state.user = null;
      state.isUserLoggedIn = false;
    },
  },
});

export const { signIn, signOut } = userSlice.actions;
export default userSlice.reducer;
