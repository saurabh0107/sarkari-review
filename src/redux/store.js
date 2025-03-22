"use client";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import { userApi } from "./slice/userApi"; // Import API slice

const store = configureStore({
  reducer: {
    user: userReducer, // User state management
    [userApi?.reducerPath]: userApi.reducer, // API slice
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(userApi.middleware),
});

export default store;
