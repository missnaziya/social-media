import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../features/LoginSlice/LoginSlice";
import friendSlice from "../features/FriendSlice/FriendSlice";

export const store = configureStore({
  reducer: {
    login: loginSlice,
    friend: friendSlice,
  },
});
