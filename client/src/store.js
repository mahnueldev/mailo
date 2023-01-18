import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authentication/auth/authSlice';
export const store = configureStore({
    reducer: {
        auth: authReducer,
      },
})