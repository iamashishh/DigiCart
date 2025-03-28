import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import PersonalInfo from "../components/user/PersonalInfo";
import ManageAddress from "../components/user/ManageAddress";
import SaveUpi from "../components/user/SaveUpi";
import SaveCard from "../components/user/SaveCard";

const Profile = () => {
  const user = useSelector((state) => state.auth?.usertoken?.user) || {};
  const navigator = useNavigate();
  const username = user.username;
  const [isEditing, setIsEditing] = useState({
    username: false,
    mobile: false,
    email: false,
  });
  const [activeTab, setActiveTab] = useState("profile");

  const handleEdit = (field) => {
    setIsEditing((prev) => ({ ...prev, [field]: true }));
  };

  const handleSave = (field) => {
    setIsEditing((prev) => ({ ...prev, [field]: false }));
    // Here, you can dispatch an action to update the user details in the backend
  };

  const handleChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  return (
    <div className="min-h-screen flex gap-8 px-10 mt-[4%] max-md:mt-[15%] max-sm:mt-[35%] max-sm:flex-col lg:bg-gray-100">
       <i
          onClick={() => navigator(-1)}
          className="ri-arrow-left-line cursor-pointer  absolute top-22 left-10 text-xl text-black font-black"
        ></i> 
      {/* Sidebar */}
      <div className="w-[25%] flex flex-col gap-8 mt-8">
        {/* Profile Section */}
        <div className="bg-white flex items-center p-4 shadow rounded-lg">
          <img
            className="w-12 h-12 rounded-full"
            src="/user-profile.png"
            alt="User"
          />
          <div className="ml-3">
            <p className="text-sm text-[#878787]">Hello,</p>
            <h1 className="text-lg font-semibold">{username}</h1>
          </div>
        </div>

        {/* Sidebar Navigation */}
        <div className="bg-white shadow rounded-lg p-4">
          <ul className="space-y-2 flex flex-col gap-5 text-start">
            <li>
              <Link to="/myorders" className="mt-4 font-bold text-[#878787] hover:text-blue-500">
                <i className="mr-2 ri-box-1-line"></i> MY ORDERS
              </Link>
              <i className="font-bold text-[#878787] hover:text-blue-500 ri-arrow-drop-right-line"></i>
            </li>
            <li className="mt-4 font-bold text-[#878787]">
              <i className="ri-user-fill"></i> ACCOUNT SETTINGS
            </li>
            <li>
              <Link
                onClick={() => setActiveTab("profile")}
                className={`cursor-pointer font-semibold ${
                  activeTab === "profile" ? "text-blue-500" : "text-gray-700"
                } hover:text-blue-500`}
              >
                Profile Information
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setActiveTab("address")}
                className={`cursor-pointer font-semibold ${
                  activeTab === "address" ? "text-blue-500" : "text-gray-700"
                } hover:text-blue-500`}
              >
                Manage Addresses
              </Link>
            </li>

            <li className="mt-4 font-bold text-[#878787]">
            <i class="ri-wallet-3-fill"></i> PAYMENTS
            </li>
            <li>
              <Link
                onClick={() => setActiveTab("saveupi")}
                className={`cursor-pointer font-semibold ${
                  activeTab === "saveupi" ? "text-blue-500" : "text-gray-700"
                } hover:text-blue-500`}
              >
                Saved UPI
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setActiveTab("savecard")}
                className={`cursor-pointer font-semibold ${
                  activeTab === "savecard" ? "text-blue-500" : "text-gray-700"
                } hover:text-blue-500`}
              >
                Saved Cards
              </Link>
            </li>
          
          </ul>
        </div>
      </div>

      {/* Profile Form Section */}
      <div className="w-[50%] relative mt-8 bg-white shadow rounded-lg p-6">
        {activeTab === "profile" && <PersonalInfo />}

        {activeTab === "address" && <ManageAddress />}
        
        {activeTab === "saveupi" && <SaveUpi/>}
        {activeTab === "savecard" && <SaveCard/>}

        {/* <img
          className="absolute bottom-[-1%]"
          src="/overlay-profile.png"
          alt=""
        /> */}
      </div>
    </div>
  );
};

export default Profile;
