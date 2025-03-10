



import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import axios from "axios";

export default function SearchBar({ groups }) {
  const [selectedGroups, setSelectedGroups] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showGroupDropdown, setShowGroupDropdown] = useState(false);
  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);
  const [groupSearch, setGroupSearch] = useState(""); // User input for search inside the select field
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
  };

  const removeCategories = (category) => {
    setSelectedCategories(selectedCategories.filter((item) => item.id !== category.id));
  };

  return (
    <div className="flex justify-center mt-6 px-4">
      <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-full transition-all duration-300 border px-4 py-2 w-full md:w-2/3 relative">
        
        {/* Group Selection (Search Inside Input Field) */}
        <div className="relative w-full">
          <div
            className="flex flex-wrap gap-2 px-4 py-2 border-none outline-none w-full text-gray-600 bg-white cursor-text"
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
                className="w-full border-none outline-none bg-transparent cursor-pointer"
                onFocus={() => setShowGroupDropdown(true)}
              />
            )}
          </div>

          {showGroupDropdown && (
            <ul className="absolute z-10 bg-white border shadow-lg rounded-md mt-2 w-full max-h-40 overflow-y-auto">
              {groups
                .filter((group) => group.name.toLowerCase().includes(groupSearch.toLowerCase()))
                .map((group) => (
                  <li
                    key={group.id}
                    className={`px-4 py-2 cursor-pointer hover:bg-gray-200 ${
                      selectedGroups.some((item) => item.id === group.id) ? "bg-gray-300" : ""
                    }`}
                    onClick={() => toggleGroup(group)}
                  >
                    {group.name}
                  </li>
                ))}
            </ul>
          )}
        </div>

        {/* Divider */}
        <span className="hidden md:block border-l h-6 mx-2"></span>

        {/* Category Selection */}
        <div className="relative w-full">
          <div
            className="flex flex-wrap gap-2 px-4 py-2 border-none outline-none w-full text-gray-600 bg-white cursor-pointer"
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
            <ul className="absolute z-10 bg-white border shadow-lg rounded-md mt-2 w-full max-h-40 overflow-y-auto">
              {categories?.map((category) => (
                <li
                  key={category.id}
                  className={`px-4 py-2 cursor-pointer hover:bg-gray-200}`}
                  onClick={() => selectCategory(category)}
                >
                  {category.title}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Search Button */}
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full flex items-center mt-3 md:mt-0 md:ml-4 w-full md:w-auto">
          <FaSearch className="mr-2" /> Search
        </button>
      </div>
    </div>
  );
}
