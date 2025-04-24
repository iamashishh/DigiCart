import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Link,useNavigate } from "react-router-dom";
import PersonalInfo from "../user/PersonalInfo";
import ManageAddress from "../user/ManageAddress";
import SaveUpi from "../user/SaveUpi";
import SaveCard from "../user/SaveCard";
import { logout } from "../../store/Reducers/AuthReducer";



export default function MobileProfileSidebar() {
  const user = useSelector((state) => state.auth?.usertoken?.user) || {};
  const username = user.username;


  const [activeSection, setActiveSection] = useState("menu");

  const renderSection = () => {
    return (
      <div className=" mt-30 max-sm:block max-md:hidden lg:hidden">
        <div
          className="mb-4  flex items-center gap-2 text-gray-600 cursor-pointer"
          onClick={() => setActiveSection("menu")}
        >
          <i className="ri-arrow-left-line text-lg"></i> <span>Back</span>
        </div>
        <div className="p-2 rounded-lg shadow">
          {activeSection === "profile" && <PersonalInfo />}
          {activeSection === "address" && <ManageAddress />}
          {activeSection === "upi" && <SaveUpi />}
          {activeSection === "cards" && <SaveCard />}
        </div>
      </div>
    );
  };

  const renderMenu = () => {
    return (
      <div className=" space-y-4 mt-33 max-sm:block max-md:hidden lg:hidden">
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

        <div className="p-4 space-y-4 bg-white rounded-lg shadow">
          <Link to="/myorders" className="mt-4 font-bold text-[#878787] hover:text-blue-500">
                          <i className="mr-2 ri-box-1-line"></i> MY ORDERS
                        </Link>

          <div>
            <h3 className="text-sm font-bold text-gray-600 mt-4"> <i className="ri-user-fill"></i>    ACCOUNT SETTINGS</h3>
            <div className="space-y-2 mt-2">
              <div
                className="w-full text-left cursor-pointer text-gray-700 hover:text-blue-600"
                onClick={() => setActiveSection("profile")}
              >
                Profile Information
              </div>
              <div
                className="w-full text-left cursor-pointer text-gray-700 hover:text-blue-600"
                onClick={() => setActiveSection("address")}
              >
                Manage Addresses
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-600 flex items-center gap-1">
              <i className="ri-bank-card-line text-base"></i> PAYMENTS
            </h3>
            <div className="space-y-2 mt-2">
              <div
                className="w-full text-left cursor-pointer text-gray-700 hover:text-blue-600"
                onClick={() => setActiveSection("upi")}
              >
                Saved UPI
              </div>
              <div
                className="w-full text-left cursor-pointer text-gray-700 hover:text-blue-600"
                onClick={() => setActiveSection("cards")}
              >
                Saved Cards
              </div>
            </div>
          </div>

          <div
            className="w-full text-red-600 flex items-center gap-2 justify-start cursor-pointer hover:text-red-800"
          >
          <Link to='/' onClick={() => dispatch(logout())} className=" font-bold text-red-600 cursor-pointer">
                     <i className="mr-2 ri-logout-box-line"></i>Logout
                     </Link>
          </div>
        </div>
      </div>
    );
  };

  return activeSection === "menu" ? renderMenu() : renderSection();
}
