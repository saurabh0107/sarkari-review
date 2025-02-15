import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex justify-center mt-6 px-4">
      <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-full transition-all duration-300 border px-4 py-2 w-full md:w-2/3">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Enter category / services / reviews"
          className="px-4 py-2 border-none outline-none w-full text-gray-600"
        />

        {/* Divider (Only for larger screens) */}
        <span className="hidden md:block border-l h-6 mx-2"></span>

        {/* Experience Dropdown */}
        <select className="px-4 py-2 border-none outline-none text-gray-600 w-full md:w-auto">
          <option>Select experience</option>
          <option>Fresher</option>
          <option>1-3 years</option>
          <option>3-5 years</option>
          <option>5+ years</option>
        </select>

        {/* Divider (Only for larger screens) */}
        <span className="hidden md:block border-l h-6 mx-2"></span>

        {/* Location Input */}
        <input
          type="text"
          placeholder="Enter location"
          className="px-4 py-2 border-none outline-none w-full text-gray-600"
        />

        {/* Search Button */}
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full flex items-center mt-3 md:mt-0 md:ml-4 w-full md:w-auto">
          <FaSearch className="mr-2" /> Search
        </button>
      </div>
    </div>
  );
}
