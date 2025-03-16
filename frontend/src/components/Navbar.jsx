import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <img src="./logo.png" alt="Logo" className="h-8" />

      <ul className="flex gap-5 max-sm:hidden">
        <li>
          <Link className="font-semibold hover:text-green-600 transition-colors duration-200">
            Categories
          </Link>
        </li>
        <li>
          <Link className="hover:text-green-600 transition-colors duration-200">
            Deals
          </Link>
        </li>
        <li>
          <Link className="hover:text-green-600 transition-colors duration-200">
            What's New Delivery
          </Link>
        </li>
      </ul>

      <div className="flex gap-5 items-center">
        {/* Search Bar */}
        <div className="relative max-sm:hidden w-60">
          <input
            className="outline-none rounded-2xl px-10 py-2 bg-[#F5F6F6] w-full"
            type="text"
            placeholder="Search Product"
          />
          <i className="ri-search-eye-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
        </div>

        {/* Account & Cart */}
        <Link className="flex items-center gap-1 hover:text-green-600 transition-colors duration-200">
          <i className="ri-user-3-line"></i> Account
        </Link>
        <Link className="flex items-center gap-1 hover:text-green-600 transition-colors duration-200">
          <i className="ri-shopping-cart-2-line"></i> Cart
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
