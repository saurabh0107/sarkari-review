"use client"
import Image from "next/image";
import React from "react";
import Img from "../../assets/images/profile.jpg";
const ProfilePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Profile Header Section */}
      {/* <div className="relative bg-cover bg-center h-60" >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div> */}

      {/* User Profile Information */}
      <div className="relative mx-auto w-[99%] bg-white shadow-md mt-1 p-4 rounded-lg">
        <div className="flex items-center">
          {/* Profile Picture */}
          <div className="w-32 h-32 bg-gray-300 rounded-full border-4 border-white flex items-center justify-center text-4xl">
            <Image
              src={Img}
              alt="User Profile"
              className="w-full h-full rounded-full"
            />
          </div>

          {/* User Details */}
          <div className="ml-4">
            <h2 className="text-2xl font-bold">Saurabh Singh</h2>
            <p className="text-green-600">@saurabh0107singh</p>
            <p className="text-sm text-gray-600 mt-1">
              📍 India |{" "}
              <span className="font-semibold">Member Since: Mar 05, 2025</span>
            </p>
          </div>
        </div>

        {/* User Stats & Buttons */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex space-x-8">
            <div className="text-center">
              <p className="text-lg font-bold">0</p>
              <p className="text-gray-500">Reviews</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold">0</p>
              <p className="text-gray-500">Followers</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold">0</p>
              <p className="text-gray-500">Blog Posts</p>
            </div>
          </div>
          <div className="space-x-2">
            <button className="bg-white border px-4 py-2 text-sm shadow-md">
              Reward Points
            </button>
            <button className="bg-white border px-4 py-2 text-sm shadow-md">
              ✏️ Update Profile
            </button>
          </div>
        </div>
      </div>

      {/* Rewards Section */}
      <div className="w-[99%] mx-auto mt-6 bg-white shadow-md p-4 rounded-lg">
        <div className="flex items-center">
          <div className="bg-green-600 text-white px-3 py-1 rounded-l-md text-sm font-semibold">
            Rewards
          </div>
          <div className="flex space-x-6 ml-4">
            {[
              "Beginner",
              "Popular",
              "Category Expert",
              "Celebrity Writer",
              "Star Writer",
            ].map((reward, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  🔒
                </div>
                <p className="text-sm text-gray-600">{reward}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="w-[99%] mx-auto mt-4 bg-white shadow-md p-4 rounded-lg flex justify-between">
        <div className="text-center">
          <div className="bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-sm">
            ROD
          </div>
          <p className="text-sm text-gray-600">Review of the day (0)</p>
        </div>
        <div className="text-center">
          <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center">
            ⭐
          </div>
          <p className="text-sm text-gray-600">Featured Articles (0)</p>
        </div>
      </div>

      {/* Sidebar and Chat Section */}
      <div className="w-[99%] mx-auto mt-4 flex space-x-6">
        {/* Sidebar */}
        <div className="w-1/4 bg-white shadow-md p-4 rounded-lg">
          {["Profile", "Reviews", "Blog Posts", "Photos", "Activities"].map(
            (item, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 text-gray-700 text-sm py-2 border-b"
              >
                <span>📁</span>
                <p>{item}</p>
              </div>
            )
          )}
        </div>

        {/* Chat Section */}
        <div className="w-3/4 bg-white shadow-md rounded-lg">
          <div className="flex">
            <button className="w-1/2 text-center py-2 bg-green-600 text-white font-semibold">
              Recent chats
            </button>
            <button className="w-1/2 text-center py-2 bg-gray-200 text-gray-700 font-semibold">
              Following
            </button>
          </div>
          <div className="p-4">
            <h4 className="text-gray-700 font-semibold text-sm">
              People you may know
            </h4>
            <div className="flex items-center mt-2 space-x-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <p className="text-gray-700 text-sm font-semibold">
                  stsikkandhar
                </p>
                <p className="text-gray-500 text-xs">Chat with this member</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Broadcast Button */}
      <div className="w-[99%] mx-auto mt-4">
        <button className="border border-green-600 text-green-600 px-4 py-2 rounded-lg flex items-center space-x-2">
          📢 <span>Broadcast</span>
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
