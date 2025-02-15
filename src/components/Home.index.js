"use client"
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import SearchBar from "./SearchBar";
import Select from "react-select";
import JobAlert from './JobAlert'
import { motion } from "framer-motion";

export const Header = () => {

  const [showForm, setShowForm] = useState(false);

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
    <div className="flex space-x-4">
    <motion.button
          animate={{ scale: [1, 1.1, 1] }}
         
          transition={{ repeat: Infinity, duration: 1.5 }}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-yellow-600"      >
        Write a Review
      </motion.button>
      {/* <button 
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-yellow-600"
        onClick={() => setShowForm(true)}
      >
        Write a Reviews
      </button> */}
      <button className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-blue-600">Register</button>
      <button className="text-gray-700 hover:text-gray-900">Login</button>
    </div>
    
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

export const HeroSection = () => {
  return (
    <div className="text-center py-16 bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-900">India's No. 1 platform for sarkari review</h1>
      <SearchBar/>

        {/* <div className="flex items-center bg-white border rounded-full px-4 py-2 shadow-md w-96">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search Skills"
            className="ml-2 w-full outline-none"
          />
        </div> */}
    </div>
  );
};


 <JobAlert/> 



// export const TestimonialSection = () => {
//   return (
//     <div className="relative flex justify-center mt-10">
//       {/* <div className="absolute left-10 bg-white p-4 rounded-lg shadow-lg">
//         <p>"I found that I deserve much better salary.. Thanks SarkariReview! ❤️"</p>
//       </div>
//       <div className="absolute right-10 bg-white p-4 rounded-lg shadow-lg">
//         <p>"I now know what's happening inside a company before joining! 😎"</p>
//       </div> */}
//     </div>
//   );
// };

export const CTASection = () => {
  return (
    <div className="bg-indigo-700 text-white py-12 text-center mt-20">
      <h2 className="text-2xl font-bold">Real Time interview experince</h2>
      <button className="mt-4 px-6 py-2 bg-white text-indigo-700 font-semibold rounded-lg">
        Join the Battle with your feedback
      </button>
    </div>
  );
};



export const Footer = () =>{
  return(
    <div>
      <footer className="bg-gray-900 text-white p-4 text-center mt-8">
        <p>&copy; 2025 SarkariReview. All rights reserved.</p>
      </footer>

    </div>
  )
}





