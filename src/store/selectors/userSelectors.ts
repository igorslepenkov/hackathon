import { useAppSelector } from "../hooks";

export const getUser = () => useAppSelector((state) => state.user.user);
export const getUserIsLoggedIn = () =>
  useAppSelector((state) => state.user.isUserLoggedIn);
