'use client'
import React ,{ useEffect, useState } from 'react'
import { FaSearch, FaBell, FaStar, FaCalendarAlt, FaComments, FaBook, FaBriefcase, FaUserGraduate, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import SearchBar from "../../components/SearchBar"
import ReviewList from '../ReviewList';
import GovtJobsImg from "../../assets/images/govtjob.webp"
import MentorshipImg from '../../assets/images/mntrship.jpg'
import PracticeImg from '../../assets/images/Current-Affairs-.webp'
import CurrentAffairsImg from '../../assets/images/Current-Affairs-.webp'

import Image from 'next/image';

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

    <section className="px-10 py-16 bg-gray-50">
        <h2 className="text-4xl font-semibold text-center mb-12">Latest review by aspirants</h2>
        <ReviewList/>
      </section>
   

    <div className="font-sans bg-white px-10 py-12">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          <span className="text-blue-700">Mentorship</span> And guidance
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          Explore opportunities and take guidance from professional officers
        </p>
      </div>

     


    <div className="flex flex-col items-center px-6 md:px-20">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full mt-10">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-900">
            <span className="text-blue-600">Unlock</span> Your Career
          </h1>
          <p className="text-gray-600 mt-3 text-lg">
          Stay updated with the latest government job openings, exams, and results your path to success starts here!"
          </p>
          <button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-full shadow-md">
            Try Sarkari review premium for free!
          </button>
        </div>

        {/* Right Content - Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 md:mt-0 md:w-1/2">
          {[
            { title: "Government Jobs", desc: "Gain Practical Experience", bg: "bg-green-200" },
            { title: "Exam Mentorship", desc: "Guidance From Top Mentors", bg: "bg-orange-200" },
            { title: "Mock Tests & Quizzes", desc: "Explore Diverse Careers", bg: "bg-blue-200" },
            { title: "Current Affairs Challenges", desc: "Refine Skills Daily", bg: "bg-purple-200" },
            { title: "Competitions", desc: "Battle For Excellence", bg: "bg-yellow-200" },
            { title: "More", desc: "Discover More Opportunities", bg: "bg-pink-200" },
          ].map((card, index) => (
            <div key={index} className={`p-4 w-64 rounded-lg shadow-md relative ${card.bg}`}>
              <h2 className="font-semibold text-lg">{card.title}</h2>
              <p className="text-sm text-gray-600">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Who's using section */}
      {/* <div className="mt-12 w-full">
        <h2 className="text-xl font-bold text-gray-900">Who's using sarkari review</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {[
            {
              title: "Students and Professionals",
              desc: "Unlock Your Potential: Compete, Build Resume, Grow and get Hired!",
              bg: "bg-gray-100",
            },
            {
              title: "Companies and Recruiters",
              desc: "Discover Right Talent: Hire, Engage, and Brand Like Never Before!",
              bg: "bg-gray-100",
            },
            {
              title: "Colleges",
              desc: "Bridge Academia and Industry: Empower Students with Real-World Opportunities!",
              bg: "bg-gray-100",
            },
          ].map((item, index) => (
            <div key={index} className={`p-4 rounded-lg shadow-md ${item.bg}`}>
              <h3 className="font-semibold text-md">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div> */}

    </div>


    </div>



     

   
    <section className="px-10 py-16 bg-gray-50">
        <h2 className="text-4xl font-semibold text-center mb-12">Latest review by aspirants</h2>
        <ReviewList/>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div> */}
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