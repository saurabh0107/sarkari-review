'use client'
import React ,{ useEffect, useState } from 'react'
import { FaSearch, FaBell, FaStar, FaCalendarAlt, FaComments, FaBook, FaBriefcase, FaUserGraduate, FaClock, FaLinkedin, FaTwitter, FaEnvelopeOpenText, FaUsers, FaBookOpen } from "react-icons/fa";
import { motion } from "framer-motion";
import SearchBar from "../../components/SearchBar"
import Image from 'next/image';
import Exam from '../../assets/images/exam.webp'
import Profile from '../../assets/images/profile.jpg'
import { useRouter } from 'next/navigation';
import SarkariReviewList from "../../app/review-list/page.js";

function Homepage({groups}) {
    const [isHovered, setIsHovered] = useState(false);
    const router = useRouter();

     const links = [
    { text: "RRB Paramedical Post Exam Date 2025", color: "text-purple-700" },
    { text: "Railway RRB ALP Stage II Admit Card 2025", color: "text-purple-700" },
    { text: "SSC Constable GD Answer Key", color: "text-orange-700" },
    { text: "UPSSSC Junior Assistant 2025", color: "text-orange-700" },
  ];
// create  a redux store and store every api data fetched till here 
useEffect(()=>{
     
} ,[ ])

  return (
   <>


<div>
<div className="bg-white text-gray-900 min-h-screen font-sans">


   <div className="bg-yellow-50 border-l-4 border-yellow-400 py-2 pl-2 pr-4 overflow-hidden w-full flex items-center space-x-4">
      
      {/* Static Important Label */}
      <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded shrink-0">
        Important
      </span>

      {/* Scrolling Links Section */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex space-x-6 whitespace-nowrap"
          animate={isHovered ? {} : { x: ["0%", "-50%", "0%"] }}
          transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {links.map((link, index) => (
            <a
              key={index}
              href="#"
              className={`${link.color} font-medium text-sm hover:underline`}
            >
              ● {link.text}
            </a>
          ))}
        </motion.div>
      </div>
    </div>




<SearchBar groups={groups}/>


 
    {/* Features Section */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 py-8 bg-white">
  {/* Exam Reviews Card */}
  <div onClick={() => router.push('/review-list')}
 className="bg-indigo-50 border border-indigo-200 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all text-center">
    <div className="text-5xl text-indigo-600 mb-4">📚</div>
    <h2 className="text-2xl font-bold text-indigo-700">Exam Reviews</h2>
    <p className="text-gray-600">Analysis and reviews on government exams.</p>
  </div>

  {/* Job Alerts Card */}
  <div className="bg-blue-50 border border-blue-200 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all text-center">
    <div className="text-5xl text-blue-500 mb-4">💼</div>
    <h2 className="text-2xl font-bold text-blue-700">Job Alerts</h2>
    <p className="text-gray-600">Stay updated on the latest job notifications.</p>
  </div>

  {/* Student Experiences Card */}
  <div className="bg-yellow-50 border border-yellow-200 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all text-center">
    <div className="text-5xl text-yellow-500 mb-4">🎓</div>
    <h2 className="text-2xl font-bold text-yellow-700">Student Experiences</h2>
    <p className="text-gray-600">Read experiences of successful candidates.</p>
  </div>
</div>



      




    {/* Review section */}

    {/* <section className="px-10 py-16 bg-gray-50">
        <h2 className="text-4xl font-semibold text-center mb-12">Latest review by aspirants</h2>
        <ReviewList/>
      </section> */}


       {/* Featured Exams */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-100 via-white to-gray-100">
        <h2 className="text-4xl font-bold text-center mb-12">🏆 Featured Exams</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {["UPSC", "SSC", "IBPS", "Railway", "Defence", "Teaching"].map((exam, i) => (
            <motion.div whileHover={{ y: -5 }} key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-xl">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{exam}</h3>
              <p className="text-sm text-gray-600">Explore opportunities and resources</p>
            </motion.div>
          ))}
        </div>
      </section>


       <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <FaUsers className="text-4xl mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">50,000+</h3>
              <p className="text-xl">Successful Candidates</p>
            </div>
            <div>
              <FaBookOpen className="text-4xl mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">1000+</h3>
              <p className="text-xl">Study Materials</p>
            </div>
            <div>
              <FaBell className="text-4xl mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">500+</h3>
              <p className="text-xl">Exam Notifications</p>
            </div>
          </div>
        </div>
      </section>

      {/* Preparation Hub */}
      <section className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">🧠 Preparation Hub</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Study Materials", "Previous Papers", "Video Lectures", "Mock Tests"].map((item, i) => (
            <motion.div whileHover={{ rotate: 1 }} key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl text-center border-b-4 border-blue-400">
              <h4 className="text-lg font-semibold text-blue-900">{item}</h4>
              <p className="text-sm text-gray-600">Start now</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Current Affairs */}
      <section className="bg-white py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">📰 Daily Current Affairs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {["India signs space treaty with EU", "Budget 2025 highlights", "ISRO launches 3 satellites"].map((news, i) => (
            <motion.div whileHover={{ scale: 1.03 }} key={i} className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 shadow-md hover:shadow-xl">
              <h4 className="font-bold text-blue-800 text-lg mb-2">🗞 {news}</h4>
              <p className="text-sm text-gray-600">Tap to read our summary and key takeaways.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* <UserProfile/> */}
   

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


    </div>


     <section className="py-20 px-6 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">👨‍💼 Meet Our CEO</h2>
        <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-lg text-center border border-blue-100">
          <Image
            src={Profile}
            alt="CEO Profile"
            className="mx-auto rounded-full w-36 h-36 object-cover shadow-md mb-4"
          />
          <h3 className="text-2xl font-bold text-blue-900 mb-1">Saurabh Singh</h3>
          <p className="text-blue-600 font-medium italic mb-4">Founder & CEO</p>
          <p className="text-sm text-gray-700 mb-6">
            Saurabh is the visionary behind SarkariReview.com. With a mission to simplify government job access, he is empowering millions of aspirants with timely updates, insights, and preparation tools.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-blue-700 hover:text-blue-900 text-xl">
              <FaLinkedin />
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600 text-xl">
              <FaTwitter />
            </a>
            <a href="mailto:saurabh@sarkarireview.com" className="text-red-500 hover:text-red-700 text-xl">
              <FaEnvelopeOpenText />
            </a>
          </div>
        </div>
      </section>


    </div>


  


  </div>
    </div>
   </>
  )
}

export default Homepage