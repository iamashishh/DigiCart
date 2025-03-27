import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Profile = () => {
  const user = useSelector((state) => state.auth?.usertoken?.user) || {}; // Safe access
  const username = user.username || "Guest";
  const email = user.email || "Not Available";
  const mobile = user.mobile || "Not Available";

  return (
    <div className="min-h-screen flex gap-8 px-10 mt-[4%] max-md:mt-[15%] max-sm:mt-[35%] max-sm:flex-col lg:bg-gray-100">
      
      {/* Sidebar */}
      <div className="w-[25%] flex flex-col gap-8 mt-8">
        
        {/* Profile Section */}
        <div className="bg-white flex items-center p-4 shadow rounded-lg">
          <img className="w-12 h-12 rounded-full" src="/user-profile.png" alt="User" />
          <div className="ml-3">
            <p className="text-sm text-[#878787]">Hello,</p>
            <h1 className="text-lg font-semibold">{username}</h1>
          </div>
        </div>

        {/* Sidebar Navigation */}
        <div className="bg-white shadow rounded-lg p-4">
          <ul className="space-y-2 flex flex-col gap-5 text-start ">
            <li>
              <Link className="mt-4 font-bold text-[#878787] hover:text-blue-500"> <i className="mr-2 ri-box-1-line"></i> MY ORDERS</Link>
              <i className="font-bold text-[#878787] hover:text-blue-500 ri-arrow-drop-right-line"></i>
            </li>
            <li className="mt-4 font-bold text-[#878787]"><i className="ri-user-fill"></i> ACCOUNT SETTINGS</li>
            <li>
              <Link className="block hover:bg-[#F5FAFF] hover:p-2 transition duration-300 text-blue-500 font-semibold">Profile Information</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Profile Form Section */}
      <div className="w-[50%] relative mt-8 bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-semibold flex justify-between">
          Personal Information
          <Link className="text-blue-500 text-sm">Edit</Link>
        </h2>
        <div className="mt-4 space-y-4">
          <div className="flex gap-4">
            <input 
              className="w-1/2 p-2 border border-gray-300 rounded" 
              type="text" 
              value={username}  
              readOnly 
            />
          </div>
        </div>

        {/* Mobile Number Section */}
        <h2 className="text-lg font-semibold flex justify-between mt-6">
          Mobile Number
          <Link className="text-blue-500 text-sm">Edit</Link>
        </h2>
        <input className="w-full p-2 mt-2 border border-gray-300 rounded" type="text" value={mobile} readOnly />

        {/* Email Section */}
        <h2 className="text-lg font-semibold flex justify-between mt-6">
          Email Address
          <Link className="text-blue-500 text-sm">Edit</Link>
        </h2>
        <input className="w-full p-2 mt-2 border border-gray-300 rounded" type="text" value={email} readOnly />

        <img className="absolute bottom-[-1%]" src="/overlay-profile.png" alt="" />
      </div>
    </div>
  );
};

export default Profile;