"use client";
import { createSlice } from "@reduxjs/toolkit";
const intialAuthState = {
  token: localStorage.getItem("token") ? true : false,
};
const authSlice = createSlice({
  name: "auth",
  initialState: intialAuthState,
  reducers: {
    login: (state, action) => {
      localStorage.setItem("token", action.payload);
      state.token = true;
    },
    logout: (state) => {
      state.token = false;
      localStorage.removeItem("token");
    },
  },
});
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
