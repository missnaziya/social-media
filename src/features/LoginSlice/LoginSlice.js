import { createSlice } from "@reduxjs/toolkit";

const loggedInUser = JSON.parse(localStorage.getItem("loginInfo"));
const initialState = {
  auth: loggedInUser?.status || false,
  data: loggedInUser?.data || {},
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.auth = payload.status;
      state.data = payload.data;
      localStorage.setItem("loginInfo", JSON.stringify(payload));
    },
    logout: (state) => {
      state.auth = false;
      state.data = [];
      localStorage.removeItem("loginInfo");
    },
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
