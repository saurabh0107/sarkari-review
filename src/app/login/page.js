"use client"
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function AuthModal({  }) {
  const [isLogin, setIsLogin] = useState(true);

  return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white rounded-lg p-8 w-[400px] max-w-[90%] shadow-xl relative flex flex-col items-center backdrop-blur-md bg-opacity-90">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
            onClick={() => setShowModal(false)}
          >
            ✖
          </button>
          
          {/* Toggle Between Login & Register */}
          <div className="flex w-full justify-center mb-6 gap-2">
            <button
              className={`px-6 py-2 text-lg font-semibold rounded-md transition-all ${
                isLogin ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              className={`px-6 py-2 text-lg font-semibold rounded-md transition-all ${
                !isLogin ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => setIsLogin(false)}
            >
              Register
            </button>
          </div>
          
          {/* Form Content */}
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
            {isLogin ? "Welcome Back!" : "Create an Account"}
          </h2>
          <form className="w-full flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              className="p-3 border rounded-md w-full focus:ring-2 focus:ring-blue-400 outline-none"
            />
            {!isLogin && (
              <input
                type="text"
                placeholder="Username"
                className="p-3 border rounded-md w-full focus:ring-2 focus:ring-blue-400 outline-none"
              />
            )}
            <input
              type="password"
              placeholder="Password"
              className="p-3 border rounded-md w-full focus:ring-2 focus:ring-blue-400 outline-none"
            />
            {!isLogin && (
              <input
                type="password"
                placeholder="Confirm Password"
                className="p-3 border rounded-md w-full focus:ring-2 focus:ring-blue-400 outline-none"
              />
            )}
            <button className="bg-blue-600 text-white py-3 rounded-md font-bold hover:bg-blue-700 transition-all">
              {isLogin ? "Login" : "Register"}
            </button>
          </form>
          
          {/* Social Logins */}
          <div className="mt-6 flex flex-col w-full gap-3">
            <button className="flex items-center justify-center gap-2 border py-2 px-4 rounded-md w-full text-gray-700 hover:bg-gray-100 transition-all">
              <FcGoogle size={24} /> Continue with Google
            </button>
            <button className="flex items-center justify-center gap-2 border py-2 px-4 rounded-md w-full text-gray-700 hover:bg-gray-100 transition-all">
              <FaFacebook size={24} className="text-blue-600" /> Continue with Facebook
            </button>
          </div>
        </div>
      </div>
    
  );
}
