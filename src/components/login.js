"use client"

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaLock, FaEnvelope, FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";

const AuthPage = () => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white bg-opacity-40 backdrop-blur-lg shadow-2xl rounded-3xl p-8 max-w-md w-full border border-white/30"
      >
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">
          {isSignup ? "Create an Account" : "Welcome Back"}
        </h2>
        <form>
          {isSignup && (
            <div className="relative mb-4">
              <FaUser className="absolute left-3 top-3 text-gray-700" />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full pl-10 p-3 bg-white bg-opacity-60 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          )}
          <div className="relative mb-4">
            <FaEnvelope className="absolute left-3 top-3 text-gray-700" />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full pl-10 p-3 bg-white bg-opacity-60 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="relative mb-4">
            <FaLock className="absolute left-3 top-3 text-gray-700" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 p-3 bg-white bg-opacity-60 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3 rounded-xl transition-all shadow-lg"
          >
            {isSignup ? "Sign Up" : "Login"}
          </motion.button>
        </form>
        <div className="flex justify-center items-center mt-4">
          <span className="text-blue-900">or continue with</span>
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <motion.button whileHover={{ scale: 1.1 }} className="p-3 bg-red-500 text-white rounded-full shadow-lg">
            <FaGoogle size={20} />
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} className="p-3 bg-blue-700 text-white rounded-full shadow-lg">
            <FaFacebook size={20} />
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} className="p-3 bg-blue-400 text-white rounded-full shadow-lg">
            <FaTwitter size={20} />
          </motion.button>
        </div>
        <p className="text-center text-blue-900 mt-6">
          {isSignup ? "Already have an account?" : "Don't have an account?"} 
          <span
            className="text-blue-700 cursor-pointer hover:underline font-semibold"
            onClick={() => setIsSignup(!isSignup)}
          >
            {isSignup ? " Login" : " Sign Up"}
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default AuthPage;
