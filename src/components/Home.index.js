"use client"
import React from "react";
import { FaSearch } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
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
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg">Register</button>
        <button className="text-gray-700">Login</button>
      </div>
    </header>
  );
};

export const HeroSection = () => {
  return (
    <div className="text-center py-16 bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-900">India's No. 1 platform for sarkari review</h1>
      <div className="flex justify-center mt-6">
        <div className="flex items-center bg-white border rounded-full px-4 py-2 shadow-md w-96">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search Skills"
            className="ml-2 w-full outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export const TestimonialSection = () => {
  return (
    <div className="relative flex justify-center mt-10">
      <div className="absolute left-10 bg-white p-4 rounded-lg shadow-lg">
        <p>"I found that I deserve much better salary.. Thanks SarkariReview! ❤️"</p>
      </div>
      <div className="absolute right-10 bg-white p-4 rounded-lg shadow-lg">
        <p>"I now know what's happening inside a company before joining! 😎"</p>
      </div>
    </div>
  );
};

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


