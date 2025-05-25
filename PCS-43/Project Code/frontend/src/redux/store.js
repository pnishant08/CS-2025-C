import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import handelLoginSlice from "./slices/handelLoginSlice";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    loginModal: handelLoginSlice,
  },
});
