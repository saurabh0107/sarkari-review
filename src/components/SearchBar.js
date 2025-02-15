import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className="flex justify-center mt-6">
      <div className="flex items-center bg-white shadow-lg rounded-full transition-all duration-300 border px-4 py-2 w-2/3">
        {/* Expanded Search UI */}
        <input
          type="text"
          placeholder="Enter category / services / reviews"
          className="px-4 py-2 border-none outline-none w-full text-gray-600"
        />
        
        <span className="border-l h-6 mx-2"></span>
        
        <select className="px-4 py-2 border-none outline-none text-gray-600">
          <option>Select experience</option>
          <option>Fresher</option>
          <option>1-3 years</option>
          <option>3-5 years</option>
          <option>5+ years</option>
        </select>
        
        <span className="border-l h-6 mx-2"></span>
        
        <input
          type="text"
          placeholder="Enter location"
          className="px-4 py-2 border-none outline-none w-full text-gray-600"
        />
        
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full flex items-center ml-4">
          <FaSearch className="mr-2" /> Search
        </button>
      </div>
    </div>
//     <div className="flex justify-center mt-6">
//       <div
//         className={`flex items-center bg-white shadow-lg rounded-full transition-all duration-300 border px-4 py-2 ${expanded ? 'w-2/3' : 'w-1/4 cursor-pointer'}`}
//         onClick={() => setExpanded(true)}
//       >
//         {/* Initially only Search Icon */}
//         {!expanded && (
//   <div className="flex items-center text-gray-500">
//     <FaSearch className="mr-2" />
//     <span>Enter your feedback </span> 
//   </div>
// )}
        
//         {/* Expanded Search UI */}
//         {expanded && (
//           <>
//             <input
//               type="text"
//               placeholder="Enter keyword / designation / companies"
//               className="px-4 py-2 border-none outline-none w-full text-gray-600"
//             />
            
//             <span className="border-l h-6 mx-2"></span>
            
//             <select className="px-4 py-2 border-none outline-none text-gray-600">
//               <option>Select experience</option>
//               <option>Fresher</option>
//               <option>1-3 years</option>
//               <option>3-5 years</option>
//               <option>5+ years</option>
//             </select>
            
//             <span className="border-l h-6 mx-2"></span>
            
//             <input
//               type="text"
//               placeholder="Enter location"
//               className="px-4 py-2 border-none outline-none w-full text-gray-600"
//             />
            
//             <button className="bg-blue-600 text-white px-6 py-2 rounded-full flex items-center ml-4">
//               <FaSearch className="mr-2" /> Search
//             </button>
//           </>
//         )}
//       </div>
//     </div>
  );
}
