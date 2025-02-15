"use client"
import React from "react";
import Link from "next/link";

const JobPortalUI = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="grid grid-cols-3 gap-6 max-w-6xl w-full">
        {/* Job Alerts Section */}
        <div className="bg-white p-6 rounded-2xl shadow-md w-full">
          <h2 className="text-xl font-bold text-center">Job Alerts</h2>
          <div className="mt-4 space-y-3">
            <button className="w-full bg-gray-200 text-black py-2 px-4 rounded-lg">SSC CGL</button>
            <button className="w-full bg-gray-200 text-black py-2 px-4 rounded-lg">UPSC Civil Services</button>
            <button className="w-full bg-gray-200 text-black py-2 px-4 rounded-lg">Bank PO</button>
          </div>
        </div>

        {/* Upcoming Govt Jobs & Exams Section */}
        <div className="bg-white p-6 rounded-2xl shadow-md col-span-1">
          <h2 className="text-xl font-bold text-center">Upcoming Government Jobs & Exams</h2>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl shadow-md text-center">
              <h3 className="font-bold">Upcoming Govt Jobs</h3>
              <p className="text-sm text-gray-600">Stay updated with the latest government job openings.</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md text-center">
              <h3 className="font-bold">Upcoming Govt Exams</h3>
              <p className="text-sm text-gray-600">Check out the latest exam schedules and notifications.</p>
            </div>
          </div>
        </div>

        {/* Study Materials Section */}
        <div className="bg-white p-6 rounded-2xl shadow-md w-full">
          <h2 className="text-xl font-bold text-center">Study Materials</h2>
          <div className="mt-4 space-y-3 grid">
          <Link href="https://www.ambitionbox.com/">
        <button className="w-full bg-purple-500 text-white py-2 px-4 rounded-lg">Download PDFs</button>
      </Link>
      <Link href="https://www.ambitionbox.com/">
        <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg">Watch Videos</button>
      </Link>
      <Link href="https://bytecode.live/quiz/">
        <button className="w-full bg-red-500 text-white py-2 px-4 rounded-lg">Take Quizzes</button>
      </Link>
          </div>
        </div>
      </div>

      {/* Bottom Sections */}
      <div className="grid grid-cols-3 gap-6 max-w-6xl w-full mt-6">
        <div className="bg-white p-4 rounded-2xl shadow-md text-center">
          <h3 className="font-bold">Exam Section</h3>
          <p className="text-sm text-gray-600">Past papers and study guides.</p>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-md text-center">
          <h3 className="font-bold">Blog Section</h3>
          <p className="text-sm text-gray-600">Read the latest articles and insights.</p>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-md text-center">
          <h3 className="font-bold">Mock Interviews</h3>
          <p className="text-sm text-gray-600">Prepare with expert mock interviews.</p>
        </div>
      </div>
    </div>
  );
};

export default JobPortalUI;
