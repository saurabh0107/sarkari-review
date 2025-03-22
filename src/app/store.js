
// import { configureStore } from '@reduxjs/toolkit'
// import todosSlice from './slice/counterslice'
// import userSlice from './api/user'
// export const reduxStore = configureStore({
//   reducer: {
//     todos: todosSlice.reducer,
//     [userSlice.reducerPath]: userSlice.reducer
//   },
//   middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(userSlice.middleware),
// })




import { configureStore } from "@reduxjs/toolkit";
import userApi from "./api/user";  // Ensure correct path

const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer, 
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(userApi.middleware),
});

export default store;
