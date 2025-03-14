import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-[5%] mt-[6vh] py-5 mb-2  flex justify-between items-center">
      <img src="./logo.png" alt="" />
      <ul className="flex gap-5">
        <li>
          <Link className="font-semibold">Categories</Link>
        </li>
        <li>
          <Link className="">Deals</Link>
        </li>
        <li>
          <Link className="">What's New Delivery</Link>
        </li>
      </ul>
      <div className="flex gap-5 items-center ">
        <div className="relative ">
          <input
            className="outline-none rounded-2xl px-6 py-1 bg-[#F5F6F6] w-full"
            type="text"
            placeholder="Search Product"
          />
          <i className="ri-search-eye-line absolute left-50 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
        </div>
        <Link>
          <i className="ri-user-3-line"></i>Account
        </Link>
        <Link>
          <i className="ri-shopping-cart-2-line"></i>Cart
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
