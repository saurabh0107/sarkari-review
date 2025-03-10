"use client";
import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import Select from "react-select";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Login from "../app/login/page"
export const Header = () => {
  const router = useRouter();
  const [showForm, setShowForm] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLoginForm, setshowLoginForm] = useState(false);

  const categoryOptions = [
    { value: "company", label: "Company" },
    { value: "job_role", label: "Job Role" },
    { value: "experience", label: "Experience" },
    { value: "others", label: "Others" }
  ];

  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-md bg-white relative">
      <div className="flex items-center space-x-4">
        <div className="text-xl font-bold text-indigo-600">SarkariReview</div>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-700 hover:text-indigo-600">Home</a>
          <a href="#" className="text-gray-700 hover:text-indigo-600">Communities</a>
          <a href="#" className="text-gray-700 hover:text-indigo-600">Companies</a>
          <a href="#" className="text-gray-700 hover:text-indigo-600">Reviews</a>
          <a href="#" className="text-gray-700 hover:text-indigo-600">Jobs</a>
        </nav>
      </div>

      <div className="hidden md:flex space-x-4">
        <motion.button
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition duration-300"          onClick={() => setShowForm(true)}
        >
          Write a Review
        </motion.button> 
         <button className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-md text-white transition duration-300">Register</button>
        <button
          onClick={() => setshowLoginForm(true)}
          className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition duration-300"
        >
          Login
        </button>
      </div>

      <button className="md:hidden text-2xl text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 p-4 z-10">
          <a href="#" className="text-gray-700 hover:text-indigo-600">Home</a>
          <a href="#" className="text-gray-700 hover:text-indigo-600">Communities</a>
          <a href="#" className="text-gray-700 hover:text-indigo-600">Companies</a>
          <a href="#" className="text-gray-700 hover:text-indigo-600">Reviews</a>
          <a href="#" className="text-gray-700 hover:text-indigo-600">Jobs</a>
          <motion.button
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            onClick={() => setShowForm(true)}
          >
            Write a Review
          </motion.button>
          <button className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600">Register</button>
          <button
            onClick={() => router.push("/login")}
            className="px-4 py-2 text-blue-500 border-blue-600 rounded-lg border-2 border-solid"
          >
            Login
          </button>
        </div>
      )}

      {showLoginForm && (
  
      <Login />
   
)}


      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl p-10 w-[600px] flex flex-col space-y-6 relative shadow-lg">
            <button 
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl" 
              onClick={() => setShowForm(false)}
            >
              ✖
            </button>
            <h2 className="text-2xl font-bold text-gray-800 text-center">Submit a Review</h2>
            <Select 
              options={categoryOptions} 
              isMulti 
              className="w-full text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" 
              placeholder="Select Categories" 
            />
            <textarea 
              placeholder="Description" 
              className="border p-3 rounded-lg text-gray-700 w-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none" 
              rows="4"
            ></textarea>
            <input 
              type="file" 
              className="border p-3 rounded-lg text-gray-700 w-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition">Submit</button>
          </div>
        </div>
      )}


      


    </header>
  );
};
