// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// // Define the base API
// const userSlice = createApi({
//   reducerPath: 'userApi',
//   tagTypes: ['user-types' ,'register-user'],
//   baseQuery: fetchBaseQuery({ baseUrl: '' }),
//   endpoints: (builder) => ({ 
//      signupUser: builder.mutation({
//         query: (body) => (  {
//            url: 'v1/auth/signup',
//            method: 'post',
//             body:body
//         }),
//         providesTags:['register-user']
//       },  
//     )    ,

//     loginUser: builder.mutation({
//         query: (body) => (  {
//            url: 'v1/auth/login',
//            method: 'post',
//             body:body
//         }),
//         providesTags:['login-user']
//       },  
//     )   

//   }),

     
//   transformResponse: (response, meta, arg) => response.data ,
//       // Pick out errors and prevent nested properties in a hook or selector
//   transformErrorResponse: (response, meta, arg) => response.data,

// });

// // Export hooks for usage in functional components
// export const {
//   useGetUserQuery, useSignupUserMutation , useLoginUserMutation
// } = userSlice;


// export default userSlice




import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the base API
const userApi = createApi({
  reducerPath: 'userApi',
  tagTypes: ['user-types', 'register-user'],
  baseQuery: fetchBaseQuery({ 
    baseUrl: '',  
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({ 
    signupUser: builder.mutation({
      query: (body) => ({
        url: 'v1/auth/signup',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['register-user'],
    }),

    loginUser: builder.mutation({
      query: (body) => ({
        url: 'v1/auth/login',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['login-user'],
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useSignupUserMutation,
  useLoginUserMutation
} = userApi;

export default userApi;
