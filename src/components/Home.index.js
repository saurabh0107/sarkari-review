"use client";
import React, { useEffect, useState } from "react";
import { FaSearch, FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import Select from "react-select";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Login from "../app/login/page"
import { deleteCookie, getCookie } from "cookies-next";
import { useSelector } from "react-redux";
export const Header = () => {
  const router = useRouter();
  const user = useSelector((state) => state.user.user); // Get user from Redux state
  console.log("data", user)
  const [showForm, setShowForm] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLoginForm, setshowLoginForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  const [rating, setRating] = useState(0)
  const [review, setReview] = useState({ name: "", job: "", rating: 0, text: "", category: [], image: null });

useEffect(() => {
  debugger
  const token = getCookie('token')
    // const token = Cookies.get("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  
  const categoryOptions = [
    { value: "company", label: "Company" },
    { value: "job_role", label: "Job Role" },
    { value: "experience", label: "Experience" },
    { value: "others", label: "Others" }
  ];


  const handleLogout = () =>{
    debugger
    deleteCookie('token')
window.location.reload(); 
 }

  return (
<header className="flex justify-between items-center px-6 py-4 shadow-md bg-white relative">
      {/* Left Section */}
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

      {/* Right Section */}
      <div className="hidden md:flex space-x-4">
        <motion.button
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition duration-300"
          onClick={() => setShowForm(true)}
        >
          Write a Review
        </motion.button>

        {/* Show Register & Login only if not logged in */}
        {!IsLoggedIn ? (
          <>
            <button className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-md text-white transition duration-300">
              Register
            </button>
            <button
              onClick={() => setshowLoginForm(true)}
              className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition duration-300"
            >
              Login
            </button>
          </>
        ) : (
          // Show Profile Dropdown if logged in
          <div className="relative">
            <button 
              onClick={() => setShowDropdown(!showDropdown)} 
              className="text-gray-700 font-semibold text-2xl"
            >
              <FaUserCircle />
            </button>
            {showDropdown && (
              <div className="absolute right-0 mt-2 bg-white shadow-md rounded-md p-2 w-40 z-50 border">
                <p className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100">Profile</p>
                <p className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100">Settings</p>
                <p 
                  className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100"
                  onClick={handleLogout} // Update state
                
                >
                  Logout
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Mobile Menu Toggle */}
      <button className="md:hidden text-2xl text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
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

          {!IsLoggedIn ? (
            <>
              <button className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600">
                Register
              </button>
              <button
                onClick={() => setshowLoginForm(true)}
                className="px-4 py-2 text-blue-500 border-blue-600 rounded-lg border-2 border-solid"
              >
                Login
              </button>
            </>
          ) : (
            <button
              className="px-4 py-2 text-red-500 border-red-600 rounded-lg border-2 border-solid"
              onClick={() => {
                Cookies.remove("token");
                setIsLoggedIn(false);
              }}
            >
              Logout
            </button>
          )}
        </div>
      )}

      {/* Login Form Modal */}
      {showLoginForm && <Login setshowLoginForm={setshowLoginForm} />}

      {/* Review Form Modal */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-2xl p-10 w-[600px] flex flex-col space-y-6 relative shadow-lg">
            <button 
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl" 
              onClick={() => setShowForm(false)}
            >
              ✖
            </button>
            <h2 className="text-2xl font-bold text-gray-800 text-center">Submit a Review</h2>
            <input 
        type="text" 
        placeholder="Your Name" 
        className="w-full border p-2 rounded mb-2"
        onChange={(e) => setReview({ ...review, name: e.target.value })}
      />
      <input 
        type="text" 
        placeholder="Job Title / Exam Name" 
        className="w-full border p-2 rounded mb-2"
        onChange={(e) => setReview({ ...review, job: e.target.value })}
      />
            <Select 
              options={categoryOptions} 
              isMulti 
              className="w-full text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" 
              placeholder="Select Categories" 
            />
    <div className="flex items-center space-x-2">
          <span className="text-gray-700">Rating:</span>
          {[1, 2, 3, 4, 5].map((star) => (
            <button 
              key={star} 
              className={`text-2xl transition ${star <= rating ? "text-yellow-500" : "text-gray-400"}`} 
              onClick={() => setRating(star)}
              onMouseEnter={() => setRating(star)}
              onMouseLeave={() => setRating(rating)}
            >
              {star <= rating ? "★" : "☆"} 
            </button>
          ))}
        </div>
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
