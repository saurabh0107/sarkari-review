"use client";
import React, { useState } from 'react'
import Select from "react-select"; // Make sure this is installed via npm
import  { addReview as addReviewApi } from "../../apiWrapper/services/ReviewServices";

const AddReview = ({ setShowForm }) => {
  const [review, setReview] = useState({
    jobTitle: "",
    examLevel: "",
    rating: 0,
    resourceUsed: "",
    description: "",
    file: null,
    examCategories: 20, // Add categories to state
  });
  const [errors, setErrors] = useState({});

//   const categoryOptions = [
//     { value: "company", label: "Company" },
//     { value: "job_role", label: "Job Role" },
//     { value: "experience", label: "Experience" },
//     { value: "others", label: "Others" },
//   ];

const categoryOptions = [
  { value: 1, label: "Company" },
  { value: 2, label: "Job Role" },
  { value: 3, label: "Experience" },
  { value: 4, label: "Others" },
];


  // Handle category selection
  const handleCategoryChange = (selectedOptions) => {
    // setReview({ ...review, categories: selectedOptions ? selectedOptions.map(opt => opt.value) : [] });
        setReview({ ...review, categories: selectedOptions ? selectedOptions.value : null });
  };

  // Unified change handler for all inputs
  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setReview({ ...review, [name]: files[0] });
    } else {
      setReview({ ...review, [name]: value });
    }
  };
  

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!review.jobTitle.trim()) newErrors.jobTitle = "Job Title / Exam Name is required.";
    // if (!review.categories.length) newErrors.categories = "At least one category is required.";
    if (!review.examLevel) newErrors.examLevel = "Exam level is required.";
    if (!review.rating) newErrors.rating = "Rating is required.";
    if (!review.description.trim()) newErrors.description = "Description is required.";
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    try {
      // Prepare data for API (exclude file for now, as API expects JSON)
      const reviewData = { ...review };
      // If file upload is needed, use FormData and update ReviewServices.js accordingly
      await addReviewApi(reviewData);
      setShowForm(false);
    } catch (error) {
      setErrors({ api: "Failed to submit review. Please try again." });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white rounded-2xl w-full max-w-xl mx-auto p-8 shadow-xl">
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl z-50"
          onClick={() => setShowForm(false)}
        >
          ✖
        </button>
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Submit a Review
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          {/* Job Title / Exam Name Input */}
          <input
            type="text"
            name="jobTitle"
            placeholder="Job Title / Exam Name"
            className={`w-full border p-2 rounded mb-2 ${errors.jobTitle ? 'border-red-500' : ''}`}
            value={review.jobTitle}
            onChange={handleInputChange}
          />
          {errors.jobTitle && <span className="text-red-500 text-sm">{errors.jobTitle}</span>}
          {/* Category Selection */}
          <Select
            options={categoryOptions}
            isMulti={true}
            className="w-full text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Select Exam Categories"
            onChange={handleCategoryChange}
          />
          {errors.categories && <span className="text-red-500 text-sm">{errors.categories}</span>}
          {/* Exam Level Radio Buttons */}
          <div className="flex flex-col space-y-2">
            <span className="text-gray-700 font-semibold">Exam Level:</span>
            <div className="flex space-x-4">
              {["Easy", "Moderate", "Hard"].map((level) => (
                <label
                  key={level}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="examLevel"
                    value={level.toLowerCase()}
                    className="w-4 h-4 text-indigo-600"
                    checked={review.examLevel === level.toLowerCase()}
                    onChange={handleInputChange}
                  />
                  <span className="text-gray-700">{level}</span>
                </label>
              ))}
            </div>
            {errors.examLevel && <span className="text-red-500 text-sm">{errors.examLevel}</span>}
          </div>
          {/* Rating Section */}
          <div className="flex items-center space-x-2">
            <span className="text-gray-700">Rating:</span>
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                className={`text-2xl ${star <= review.rating ? "text-yellow-500" : "text-gray-400"}`}
                onClick={() => setReview({ ...review, rating: star })}
              >
                {star <= review.rating ? "★" : "☆"}
              </button>
            ))}
            {errors.rating && <span className="text-red-500 text-sm ml-2">{errors.rating}</span>}
          </div>
          {/* resourceUsed Used */}
          <input
            type="text"
            name="resourceUsed"
            placeholder="resourceUsed Used (Books, Coaching, YouTube, etc.)"
            className="w-full border p-2 rounded"
            value={review.resourceUsed}
            onChange={handleInputChange}
          />
          {/* Description Textarea */}
          <textarea
            name="description"
            placeholder="Your Experience"
            className={`border p-3 rounded-lg text-gray-700 w-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none ${errors.description ? 'border-red-500' : ''}`}
            rows="4"
            value={review.description}
            onChange={handleInputChange}
          ></textarea>
          {errors.description && <span className="text-red-500 text-sm">{errors.description}</span>}
          {/* File Upload */}
          <input
            type="file"
            name="file"
            className="border p-3 rounded-lg text-gray-700 w-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={handleInputChange}
          />
          {errors.api && <span className="text-red-500 text-sm">{errors.api}</span>}
          {/* Submit Button */}
          <button type="submit" className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddReview
