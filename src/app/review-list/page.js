"use client";

import React from "react";
import { FaStar } from "react-icons/fa";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { motion } from "framer-motion";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const reviews = [
  {
    id: 1,
    name: "Saurabh Singh",
    jobTitle: "Software Engineer",
    rating: 5,
    examLevel: "Hard",
    resourceUsed: "Notebook, YouTube",
    description:
      "The exam was challenging but with the right strategy, it became manageable. Highly recommend preparing with structured notes.",
    avatar: null,
    timeAgo: "2 days ago",
  },
  {
    id: 2,
    name: "Riya Patel",
    jobTitle: "Data Analyst",
    rating: 4,
    examLevel: "Moderate",
    resourceUsed: "Coaching, PDFs",
    description:
      "Good experience overall. Make sure to focus on mock tests and revise regularly.",
    avatar: null,
    timeAgo: "5 days ago",
  },
  {
    id: 2,
    name: "Riya Patel",
    jobTitle: "Data Analyst",
    rating: 4,
    examLevel: "Moderate",
    resourceUsed: "Coaching, PDFs",
    description:
      "Good experience overall. Make sure to focus on mock tests and revise regularly.",
    avatar: null,
    timeAgo: "5 days ago",
  },
];

export default function SarkariReviewList() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-100 py-14 px-4 md:px-16">
      {/* <h2 className="text-4xl font-bold text-center text-indigo-800 mb-14">
        Aspirant Reviews
      </h2> */}

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Content */}
        <div className="hidden md:block w-1/4 space-y-4">
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <h4 className="font-bold text-indigo-700">Average Rating</h4>
            <p className="text-5xl font-bold text-yellow-400">4.6</p>
            <div className="text-sm text-gray-500">(Based on 200+ reviews)</div>
          </div>

         

          <div className="bg-white p-4 rounded-xl shadow">
            <h5 className="font-semibold mb-2">Rating Distribution</h5>
            <Bar
              data={{
                labels: ["1", "2", "3", "4", "5"],
                datasets: [
                  {
                    label: "# of Ratings",
                    data: [0, 1, 1, 3, 5],
                    backgroundColor: "#6366F1",
                  },
                ],
              }}
              options={{
                scales: {
                  y: { beginAtZero: true },
                },
                plugins: {
                  legend: { display: false },
                },
              }}
            />
          </div>
           <div className="bg-white p-4 rounded-xl shadow">
            <h5 className="font-semibold mb-2">Top Categories</h5>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>🔹 Company Reviews</li>
              <li>🔹 Job Role Insights</li>
              <li>🔹 Interview Experience</li>
              <li>🔹 Study Resources</li>
            </ul>
          </div>
        </div>

        {/* Center Review List */}
        <div className="w-full md:w-2/4 space-y-8">
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-6 relative"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-200 to-indigo-500 text-white flex items-center justify-center font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {review.name}
                  </h4>
                  <p className="text-sm text-gray-500">{review.jobTitle}</p>
                </div>
                <span className="ml-auto text-xs text-gray-400">{review.timeAgo}</span>
              </div>

              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={
                      i < review.rating ? "text-yellow-400" : "text-gray-300"
                    }
                  />
                ))}
              </div>

              <blockquote className="text-gray-700 italic leading-relaxed">
                “{review.description}”
              </blockquote>

              <div className="mt-3 text-sm text-gray-600">
                <span className="font-semibold">Resources Used:</span> {review.resourceUsed}
              </div>

              <div className="absolute top-5 right-5 bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full">
                {review.examLevel}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Content */}
        <div className="hidden md:block w-1/4 space-y-4">
          <div className="bg-white p-4 rounded-xl shadow text-sm">
            <h5 className="font-semibold mb-2">Recent Activity</h5>
            <ul className="space-y-1 text-gray-600">
              <li>✅ Review by Saurabh added</li>
              <li>✅ Review by Riya added</li>
              <li>📈 Rating graph updated</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <h5 className="font-semibold mb-2">Exam Insights</h5>
            <p className="text-sm text-gray-600">
              Most users found <strong>Hard</strong> exams more rewarding and used <strong>Notebook + YouTube</strong> to crack it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
