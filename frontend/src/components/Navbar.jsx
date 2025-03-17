import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import { useSelector } from "react-redux";
import axios from "axios";
import { asyncgetproducts } from "../store/actions/ProductAction";


const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const products = useSelector((state) => state.products?.products || []);
  const cartCount = useSelector((state) => state.cart?.cartCount || 0); // Retrieve cartCount from Redux store

  
  // Search Logic
  useEffect(() => {
    const fetchProducts = () => {
      if (query.trim() === "") {
        setSearchResults([]);
        return;
      }

      const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
  
      setSearchResults(filteredProducts);
    };

    fetchProducts();
  }, [query, products]); // Fixed dependency array

  return (
    <div className="w-full font-semibold fixed top-0 left-0 z-50 bg-white  py-3 px-20 flex justify-between items-center">
      <img src="./logo.png" alt="Logo" className="h-10" />

      <ul className="flex gap-10 max-sm:hidden relative">
        {/* Categories with Dropdown */}
        <li
          className="relative"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <Link className="font-semibold hover:text-[#046664] transition-colors duration-200 cursor-pointer">
            <DropdownMenu  />  
          </Link>
        </li>

        <li>
          <Link className="hover:text-[#046664] transition-colors duration-200">
            Deals
          </Link>
        </li>
        <li>
          <Link className="hover:text-[#046664] transition-colors duration-200">
            What's New
          </Link>
        </li>
        <li>
          <Link className="hover:text-[#046664] transition-colors duration-200">
          Delivery
          </Link>
        </li>
      </ul>

      <div className="flex gap-5 items-center">
        {/* Search Bar */}
        <div className="relative max-sm:hidden w-70">
          <input
            className="outline-none rounded-2xl px-10 py-1 bg-[#F5F6F6] w-full"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            type="text"
            placeholder="Search Product"
          />
          <i className="ri-search-eye-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
          {query.length > 0 && (
            <i
              onClick={() => setQuery("")}
              className="max-sm:text-xl cursor-pointer absolute right-1 top-2 text-2xl ri-close-fill"
            ></i>
          )}

          {/* Search Results */}
          {searchResults.length > 0 && (
            <div className="absolute w-full max-h-[40vh] bg-white border border-zinc-300 shadow-md rounded-lg mt-2 overflow-auto z-50">
              {searchResults.map((product) => (
                <Link
                to={`/details/${product.id}`}
                key={product.id}
                className="flex items-center gap-4 p-3 hover:bg-zinc-100 duration-200 border-b border-zinc-200"
                onClick={() => setQuery("")}  // ✅ Clear search bar after selection
              >
                <img
                  className="w-[50px] h-[50px] object-cover rounded-md"
                  src={product.image}
                  alt={product.title}
                />
                <span className="font-medium">{product.title}</span>
              </Link>
              ))}
            </div>
          )}
        </div>

        {/* Account & Cart */}
        <Link className="flex items-center gap-1 hover:text-[#046664] transition-colors duration-200">
          <i className="ri-user-3-line"></i> Account
        </Link>
      
        <Link
          to="/cart"
          className="flex items-center gap-1 hover:text-[#046664] transition-colors duration-200 relative"
        >
          <i className="ri-shopping-cart-2-line"></i> Cart
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
