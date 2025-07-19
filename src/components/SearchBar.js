


// 'use client'
// import React, { useState, useEffect } from "react";
// import { FaSearch } from "react-icons/fa";
// import { IoClose } from "react-icons/io5";
// import axios from "axios";
// import Exam from '../assets/images/exam.webp'
// import Image from "next/image";

// export default function SearchBar({ groups }) {
//   const [selectedGroups, setSelectedGroups] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [showGroupDropdown, setShowGroupDropdown] = useState(false);
//   const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);
//   const [groupSearch, setGroupSearch] = useState(""); // User input for search inside the select field
//  const [selectedCategories, setSelectedCategories] = useState([]);

//   useEffect(() => {
//     if (selectedGroups.length > 0) {
//       fetchCategories();
//     } else {
//       setCategories([]);
//     }
//   }, [selectedGroups]);

//   const fetchCategories = async () => {
//     try {
//       const groupIds = selectedGroups.map((group) => group.id);
//       if (groupIds.length === 0) return;

//       const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/master/get-cat-by-group`, {
//         params: { groupId: groupIds.join(",") },
//       });

//       setCategories(response.data.data);
//     } catch (error) {
//       console.error("Error fetching categories:", error);
//       setCategories([]);
//     }
//   };

//   const toggleGroup = (group) => {
//     setSelectedGroups((prev) =>
//       prev.some((item) => item.id === group.id)
//         ? prev.filter((item) => item.id !== group.id)
//         : [...prev, group]
//     );
//     setShowGroupDropdown(false); // ✅ Close dropdown after selection

//   };

//   const removeGroup = (group) => {
//     setSelectedGroups(selectedGroups.filter((item) => item.id !== group.id));
//   };

//   const selectCategory = (category) => {
//     setSelectedCategories((prev) =>
//       prev.some((item) => item.id === category.id)
//         ? prev.filter((item) => item.id !== category.id)
//         : [...prev, category]
//     );
//     setShowCategoriesDropdown(false); // ✅ Close dropdown after selection

//   };

//   const removeCategories = (category) => {
//     setSelectedCategories(selectedCategories.filter((item) => item.id !== category.id));
//   };

//   return (

// <div className="relative bg-gradient-to-b from-white to-gray-100 py-16">
// <div className="max-w-6xl mx-auto px-6 text-center md:text-left flex flex-col md:flex-row items-center">

//     {/* Left Content */}
//     <div className="md:w-1/2">
//       <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
//         India's No. 1 <span className="text-indigo-600">Sarkari Reviews</span> Platform
//       </h1>
//       <p className="mt-4 text-gray-600 text-lg">
//         Helping aspirants with the best insights and updates
//       </p>

//       {/* Enhanced Search Bar with Multi-select Dropdowns */}
//       <div className="flex justify-center mt-6">
//         <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-full transition-all duration-300 border px-4 py-2 w-full md:w-full relative">

//           {/* Group Selection */}
//           <div className="relative w-full">
//             <div
//               className="flex flex-wrap gap-2 px-4 py-2 border-none outline-none w-full text-gray-600 bg-white cursor-text"
//               onClick={() => setShowGroupDropdown(true)}
//             >
//               {selectedGroups.length > 0 ? (
//                 selectedGroups?.map((group) => (
//                   <span key={group.id} className="bg-blue-500 text-white px-2 py-1 rounded-full flex items-center gap-1">
//                     {group.name}
//                     <IoClose
//                       className="cursor-pointer"
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         removeGroup(group);
//                       }}
//                     />
//                   </span>
//                 ))
//               ) : (
//                 <input
//                   type="text"
//                   placeholder="Select Groups..."
//                   value={groupSearch}
//                   onChange={(e) => setGroupSearch(e.target.value)}
//                   className="w-full border-none outline-none bg-transparent cursor-pointer"
//                   onFocus={() => setShowGroupDropdown(true)}
//                 />
//               )}
//             </div>

//             {showGroupDropdown && (
//               <ul className="absolute z-10 bg-white border shadow-lg rounded-md mt-2 w-full max-h-40 overflow-y-auto">
//                 {groups?.filter((group) => group.name.toLowerCase().includes(groupSearch.toLowerCase()))
//                   .map((group) => (
//                     <li
//                       key={group.id}
//                       className={`px-4 py-2 cursor-pointer hover:bg-gray-200 ${
//                         selectedGroups.some((item) => item.id === group.id) ? "bg-gray-300" : ""
//                       }`}
//                       onClick={() => toggleGroup(group)}
//                     >
//                       {group.name}
//                     </li>
//                   ))}
//               </ul>
//             )}
//           </div>

//           {/* Divider */}
//           <span className="hidden md:block border-l h-6 mx-2"></span>

//           {/* Category Selection */}
//           <div className="relative w-full">
//             <div
//               className="flex flex-wrap gap-2 px-4 py-2 border-none outline-none w-full text-gray-600 bg-white cursor-pointer"
//               onClick={() => setShowCategoriesDropdown(!showCategoriesDropdown)}
//             >
//               {selectedCategories.length > 0 ? (
//                 selectedCategories?.map((category) => (
//                   <span key={category.id} className="bg-blue-500 text-white px-2 py-1 rounded-full flex items-center gap-1">
//                     {category.title}
//                     <IoClose
//                       className="cursor-pointer"
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         removeCategories(category);
//                       }}
//                     />
//                   </span>
//                 ))
//               ) : (
//                 <span className="text-gray-400">Select Categories</span>
//               )}
//             </div>

//             {showCategoriesDropdown && (
//               <ul className="absolute z-10 bg-white border shadow-lg rounded-md mt-2 w-full max-h-40 overflow-y-auto">
//                 {categories?.map((category) => (
//                   <li
//                     key={category.id}
//                     className="px-4 py-2 cursor-pointer hover:bg-gray-200"
//                     onClick={() => selectCategory(category)}
//                   >
//                     {category.title}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>

//           {/* Search Button */}
//           <button className="bg-indigo-600 text-white px-6 py-2 rounded-full flex items-center mt-3 md:mt-0 md:ml-4 w-full md:w-auto hover:bg-indigo-700 transition">
//             <FaSearch className="mr-2" /> Search
//           </button>
//         </div>
//       </div>

//       {/* Exam Categories Buttons */}
//       <div className="mt-6 flex flex-wrap gap-3">
//         <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">UPSC</button>
//         <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">SSC CGL</button>
//         <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">Railway Exams</button>
//         <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">Banking Exams</button>
//       </div>
//     </div>

//     {/* Right Image Section */}
//     <div className="md:w-1/2 flex justify-end mt-10 md:mt-0">
//       <Image 
//         width={200}
//         height={180}
//         src={Exam}
//         alt="Exam Preparation"
//         className="w-full max-w-full object-cover"
//       />
//     </div>

//   </div>
// </div>

//   );
// }



'use client'
import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import axios from "axios";
import Exam from '../assets/images/exam.webp';
import Image from "next/image";

export default function SearchBar({ groups }) {
  const [selectedGroups, setSelectedGroups] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showGroupDropdown, setShowGroupDropdown] = useState(false);
  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);
  const [groupSearch, setGroupSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    if (selectedGroups.length > 0) {
      fetchCategories();
    } else {
      setCategories([]);
    }
  }, [selectedGroups]);

  const fetchCategories = async () => {
    try {
      const groupIds = selectedGroups.map((group) => group.id);
      if (groupIds.length === 0) return;

      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/master/get-cat-by-group`, {
        params: { groupId: groupIds.join(",") },
      });

      setCategories(response.data.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
      setCategories([]);
    }
  };

  const toggleGroup = (group) => {
    setSelectedGroups((prev) =>
      prev.some((item) => item.id === group.id)
        ? prev.filter((item) => item.id !== group.id)
        : [...prev, group]
    );
    setShowGroupDropdown(false);
  };

  const removeGroup = (group) => {
    setSelectedGroups(selectedGroups.filter((item) => item.id !== group.id));
  };

  const selectCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.some((item) => item.id === category.id)
        ? prev.filter((item) => item.id !== category.id)
        : [...prev, category]
    );
    setShowCategoriesDropdown(false);
  };

  const removeCategories = (category) => {
    setSelectedCategories(selectedCategories.filter((item) => item.id !== category.id));
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            India's No. 1 <span className="text-indigo-600">Sarkari Reviews</span> Platform
          </h1>
          <p className="text-lg text-gray-600">
            Helping aspirants with the best insights and updates
          </p>

          {/* Search UI */}
          <div className="bg-white border rounded-full px-4 py-3 shadow flex flex-col md:flex-row items-center gap-4">
            {/* Groups */}
            <div className="relative w-full">
              <div
                className="flex flex-wrap gap-2 px-2 py-1 w-full text-gray-600 bg-white cursor-text"
                onClick={() => setShowGroupDropdown(true)}
              >
                {selectedGroups.length > 0 ? (
                  selectedGroups.map((group) => (
                    <span key={group.id} className="bg-blue-500 text-white px-2 py-1 rounded-full flex items-center gap-1">
                      {group.name}
                      <IoClose
                        className="cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeGroup(group);
                        }}
                      />
                    </span>
                  ))
                ) : (
                  <input
                    type="text"
                    placeholder="Select Groups..."
                    value={groupSearch}
                    onChange={(e) => setGroupSearch(e.target.value)}
                    className="w-full outline-none"
                    onFocus={() => setShowGroupDropdown(true)}
                  />
                )}
              </div>

              {showGroupDropdown && (
                <ul className="absolute z-10 bg-white border rounded shadow max-h-40 overflow-y-auto w-full mt-1">
                  {groups?.filter((group) => group.name.toLowerCase().includes(groupSearch.toLowerCase()))
                    .map((group) => (
                      <li
                        key={group.id}
                        className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                          selectedGroups.some((item) => item.id === group.id) ? "bg-gray-200" : ""
                        }`}
                        onClick={() => toggleGroup(group)}
                      >
                        {group.name}
                      </li>
                    ))}
                </ul>
              )}
            </div>

            {/* Categories */}
            <div className="relative w-full">
              <div
                className="flex flex-wrap gap-2 px-2 py-1 w-full text-gray-600 bg-white cursor-pointer"
                onClick={() => setShowCategoriesDropdown(!showCategoriesDropdown)}
              >
                {selectedCategories.length > 0 ? (
                  selectedCategories.map((category) => (
                    <span key={category.id} className="bg-blue-500 text-white px-2 py-1 rounded-full flex items-center gap-1">
                      {category.title}
                      <IoClose
                        className="cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeCategories(category);
                        }}
                      />
                    </span>
                  ))
                ) : (
                  <span className="text-gray-400">Select Categories</span>
                )}
              </div>

              {showCategoriesDropdown && (
                <ul className="absolute z-10 bg-white border rounded shadow max-h-40 overflow-y-auto w-full mt-1">
                  {categories.map((category) => (
                    <li
                      key={category.id}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => selectCategory(category)}
                    >
                      {category.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Search Button */}
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full flex items-center w-full md:w-auto justify-center">
              <FaSearch className="mr-2" /> Search
            </button>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3">
            {["UPSC", "SSC CGL", "Railway Exams", "Banking Exams"].map((tag) => (
              <button key={tag} className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm">
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={Exam}
            alt="Exam Preparation"
            className="object-contain max-w-[400px] w-full h-auto"
            width={400}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
