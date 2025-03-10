'use client'
import React ,{ useEffect, useState } from 'react'
import { FaSearch, FaBell, FaStar, FaCalendarAlt, FaComments, FaBook, FaBriefcase, FaUserGraduate, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import SearchBar from "../../components/SearchBar"
import ReviewList from '../ReviewList';
function Homepage({groups}) {
    const [isHovered, setIsHovered] = useState(false);






// create  a redux store and store every api data fetched till here 
useEffect(()=>{
     
} ,[ ])

  return (
   <>


<div>
<div className="bg-white text-gray-900 min-h-screen font-sans">
 
   {/* Scrolling Links */}
   <div className="bg-blue-100 py-3 overflow-hidden relative w-full">
        <motion.div 
          className="flex space-x-10 whitespace-nowrap"
          animate={isHovered ? {} : { x: ["0%", "-50%", "0%"] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {["Sarkari Result Updates", "UPSC Exam Notifications", "Latest Job Alerts 2025", "JEEMain & NEET Updates", "Bihar Police Recruitment", "SSC CGL Latest News"].map((text, index) => (
            <a key={index} href="#" className="text-blue-700 font-semibold mx-4">{text}</a>
          ))}
        </motion.div>
        
      </div>

    {/* Hero Section */}
    <section className="text-center py-16 px-6">
      <h2 className="text-4xl font-bold text-blue-600">India's No. 1 Sarkari Reviews Plateform</h2>
      <p className="text-gray-700 mt-3 text-lg">Helping aspirants with the best insights and updates</p>

      <SearchBar groups={groups}/>
       {/* Trending Searches */}
       <div className="mt-4 flex flex-wrap justify-center gap-3 text-blue-600 font-medium">
        <span className="bg-white px-4 py-2 rounded-lg shadow cursor-pointer hover:bg-blue-100">UPSC</span>
        <span className="bg-white px-4 py-2 rounded-lg shadow cursor-pointer hover:bg-blue-100">SSC CGL</span>
        <span className="bg-white px-4 py-2 rounded-lg shadow cursor-pointer hover:bg-blue-100">Railway Exams</span>
        <span className="bg-white px-4 py-2 rounded-lg shadow cursor-pointer hover:bg-blue-100">Banking Exams</span>
      </div>
      {/* <div className="flex justify-center mt-6">
        <input type="text" placeholder="Enter category / services / review..." className="p-3 w-1/3 rounded-l-lg border border-gray-300 text-black" />
        <button className="bg-blue-600 p-3 rounded-r-lg hover:bg-blue-700 text-white"><FaSearch /></button>
      </div> */}
    </section>



    {/* Features Section */}


    <section className="px-10 py-16 bg-gray-100">
        {/* <h2 className="text-3xl font-semibold text-center mb-8">Our Features</h2> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white rounded-xl shadow-md text-center">
            <FaBook className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Exam Reviews</h3>
            <p>Detailed analysis and reviews on government exams.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white rounded-xl shadow-md text-center">
            <FaBriefcase className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Job Alerts</h3>
            <p>Stay updated on the latest job notifications.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white rounded-xl shadow-md text-center">
            <FaUserGraduate className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Student Experiences</h3>
            <p>Read experiences of successful candidates.</p>
          </motion.div>
        </div>
      </section>




    {/* Review section */}

    <ReviewList/>








     {/* Premium Subscription */}
     <section className="py-12 px-16 text-center bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg shadow-lg mx-16 my-12">
        <h3 className="text-3xl font-bold text-blue-700">Unlock Premium Features</h3>
        <p className="mt-4 text-lg text-gray-700">Get access to exclusive study materials, expert mentorship, and priority support.</p>
        <button className="mt-6 bg-blue-700 text-white p-4 rounded-lg hover:bg-blue-800">Subscribe Now</button>
      </section>


     

   
    <section className="px-10 py-16 bg-gray-50">
        <h2 className="text-4xl font-semibold text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-xl shadow-xl">
            <p className="italic text-lg">“This platform helped me understand exam patterns better.”</p>
            <h4 className="mt-6 font-semibold text-blue-600">- Rahul Sharma</h4>
          </div>
          <div className="p-8 bg-white rounded-xl shadow-xl">
            <p className="italic text-lg">“Accurate job alerts saved me time and effort.”</p>
            <h4 className="mt-6 font-semibold text-blue-600">- Priya Verma</h4>
          </div>
          <div className="p-8 bg-white rounded-xl shadow-xl">
            <p className="italic text-lg">“User experiences are truly motivating and insightful.”</p>
            <h4 className="mt-6 font-semibold text-blue-600">- Aman Gupta</h4>
          </div>
        </div>
      </section>

  
  </div>
       {/* <Header />
      <HeroSection />
      <JobAlert />
      <CTASection />
      <Footer/> */}
    </div>
   </>
  )
}

export default Homepage