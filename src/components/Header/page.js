"use client"
import React, { useState } from 'react'
import { motion } from "framer-motion";

const page = () => {
    const [showForm, setShowForm] = useState(false);
    const [showLoginForm, setshowLoginForm] = useState(false);
  return (
    <div>
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
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"      >
        Write a Review
      </motion.button>
      {/* <button 
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-yellow-600"
        onClick={() => setShowForm(true)}
      >
        Write a Reviews
      </button> */}
      <button className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-500">Register</button>
      <button onClick={() => router.push("/login")} className="px-4 py-2 text-blue-500 border-4 border-blue-600 rounded-lg border-2 border-solid ...">Login</button>
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
    </div>
  )
}

export default page
