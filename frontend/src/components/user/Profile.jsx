import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="min-h-screen flex gap-8 px-10 mt-[4%] max-md:mt-[15%] max-sm:mt-[35%] max-sm:flex-col lg:bg-gray-100">
      
      {/* Sidebar */}
      <div className="w-[25%] flex flex-col gap-8 mt-8">
        
        {/* Profile Section */}
        <div className="bg-white flex items-center p-4 shadow rounded-lg">
          <img className="w-12 h-12 rounded-full" src="/user-profile.png" alt="User" />
          <div className="ml-3">
            <p className="text-sm text-[#878787]">Hello,</p>
            <h1 className="text-lg font-semibold">Harshwardhan Patil</h1>
          </div>
        </div>

        {/* Sidebar Navigation */}
        <div className="bg-white shadow rounded-lg p-4">
          <ul className="space-y-2 flex flex-col gap-5 text-start ">
            <li>
              <Link className="mt-4 font-bold text-[#878787] hover:text-blue-500"> <i className=" mr-2 ri-box-1-line"></i> MY ORDERS</Link>
              <i class="font-bold text-[#878787] hover:text-blue-500 ri-arrow-drop-right-line"></i>
            </li>
            <li className="mt-4 font-bold text-[#878787]"><i class="ri-user-fill"></i> ACCOUNT SETTINGS</li>
            <li>
              <Link className="block  hover:bg-[#F5FAFF] hover:p-2 transition duration-300 text-blue-500 font-semibold">Profile Information</Link>
            </li>
            <li>
              <Link className="block font-semibold hover:bg-[#F5FAFF] hover:p-2 transition duration-300 text-gray-700 hover:text-blue-500">Manage Addresses</Link>
            </li>
            <li>
              <Link className="block font-semibold hover:bg-[#F5FAFF] hover:p-2 transition duration-300 text-gray-700 hover:text-blue-500">PAN Card Information</Link>
            </li>
            <li className="mt-4 font-bold text-[#878787]"> <i class="ri-wallet-3-fill"></i> PAYMENTS</li>
            <li>
              <Link className="block font-semibold hover:bg-[#F5FAFF] hover:p-2 transition duration-300 text-gray-700 hover:text-blue-500">Gift Cards <span className="text-green-500">₹0</span></Link>
            </li>
            <li>
              <Link className="block font-semibold hover:bg-[#F5FAFF] hover:p-2 transition duration-300 text-gray-700 hover:text-blue-500">Saved UPI</Link>
            </li>
            <li>
              <Link className="block font-semibold hover:bg-[#F5FAFF] hover:p-2 transition duration-300 text-gray-700 hover:text-blue-500">Saved Cards</Link>
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
              value="Harshwardhan" 
              readOnly 
            />
            <input 
              className="w-1/2 p-2 border border-gray-300 rounded" 
              type="text" 
              value="Patil" 
              readOnly 
            />
          </div>
          <div>
            <label className="text-gray-600">Your Gender</label>
            <div className="flex gap-4 mt-1">
              <label className="flex items-center">
                <input  type="radio" name="gender" className="mr-2" /> Male
              </label>
              <label className="flex items-center">
                <input  type="radio" name="gender" className="mr-2" /> Female
              </label>
            </div>
          </div>
        </div>

        {/* Email Section */}
        <h2 className="text-lg font-semibold flex justify-between mt-6">
          Email Address
          <Link className="text-blue-500 text-sm">Edit</Link>
        </h2>
        <input className="w-full p-2 mt-2 border border-gray-300 rounded" type="text" readOnly />

        {/* Mobile Section */}
        <h2 className="text-lg font-semibold flex justify-between mt-6">
          Mobile Number
          <Link className="text-blue-500 text-sm">Edit</Link>
        </h2>
        <input 
          className="w-full p-2 mt-2 border border-gray-300 rounded" 
          type="text" 
          value="+919302055152" 
          readOnly 
        />
     <img className=" absolute bottom-[-1%] " src="/overlay-profile.png" alt="" />
      </div>
    </div>
  );
};

export default Profile;
