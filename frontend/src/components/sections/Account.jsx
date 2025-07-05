import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../store/Reducers/AuthReducer";

const Account = () => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const {user,token} = useSelector((state) => state.auth);
  const userRole = useSelector((state) => state.auth?.usertoken?.user?.role); 


  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {token ? (
        <div className="flex items-center gap-2 cursor-pointer">
          <i className="ri-user-3-line text-xl"></i>
          <span className="font-semibold text-green-700">
            {user?.username || "unknown"}
          </span>
        </div>
      ) : (
        <Link
          to="/login"
          className="flex items-center gap-1 hover:text-green-800 transition-colors duration-200"
        >
          <i className="ri-user-3-line text-xl"></i>
          <span className="max-sm:hidden lg:block max-md:block md:block">
            Login
          </span>
        </Link>
      )}

      {isHovered && (
        <div
          className="infoaccount absolute bg-white top-5 right-0 w-60 p-2 border border-zinc-300 z-[99] shadow-md rounded-lg mt-2 overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {token ? (
            <>
              <div className="flex items-center justify-around">
                <h1 className="text-gray-600">Hello, {user?.name}</h1>
              </div>
              <hr className="border-t-1 my-2 border-zinc-300" />
              <ul className="flex flex-col gap-2 font-semibold text-lg p-2">
                <li>
                  <Link to="/profile" className="py-1 px-2 hover:text-green-800">
                    <i className="mr-2 ri-account-circle-2-line"></i>Profile
                  </Link>
                </li>
                <li>
                  <Link to="/myorders" className="py-1 px-2 hover:text-green-800">
                    <i className="mr-2 ri-box-1-line"></i>Orders
                  </Link>
                </li>
                <li>
                  <Link to="/wishlist" className={`py-1 px-2  hover:text-green-800`}>
                    <i className="mr-2 ri-heart-3-line"></i>Wishlist
                  </Link>
                </li>
                
                <li >
                  <Link to="/createproduct" className={` py-1 px-2 hover:text-green-800 ${userRole === "admin" ? "" : "hidden" }`}>
                    <i className="mr-2 ri-add-line"></i>Create Product
                  </Link>
                </li>
                <li>
                  <Link to="/settings" className="py-1 px-2 hover:text-green-800">
                    <i className="mr-2 ri-settings-2-line"></i>Settings
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => dispatch(logout())}
                    className="py-1 px-2 hover:text-green-800 flex items-center w-full text-left"
                  >
                    <i className="mr-2 ri-logout-box-line"></i>Logout
                  </button>
                </li>
              </ul>
            </>
          ) : (
            <>
              <div className="flex items-center justify-around">
                <h1>New customer?</h1>
                <Link to="/register" className="text-blue-500">
                  Sign Up
                </Link>
              </div>
              <hr className="border-t-1 my-2 border-zinc-300" />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Account;
