"use Client"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }), // Change this to your actual API URL
  endpoints: (builder) => ({
    signupUser: builder.mutation({
      query: (body) => ({
        url: "/v1/auth/signup",
        method: "POST",
        body,
      }),
    }),
    loginUser: builder.mutation({
      query: (body) => ({
        url: "v1/auth/login",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useSignupUserMutation, useLoginUserMutation } = userApi;
