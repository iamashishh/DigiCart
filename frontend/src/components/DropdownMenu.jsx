import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetproducts } from "../store/actions/ProductAction";

const DropdownMenu = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products) || { products: [] };


  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    dispatch(asyncgetproducts()); // Fetch products on component mount

    // Close dropdown on outside click
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [dispatch]);

  // Extract unique categories
  const categories = [...new Set(products.map((product) => product.category))];

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div ref={dropdownRef} className="relative ">
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className="font-semibold cursor-pointer rounded-md transition"
      >
        Categories <i class="ri-arrow-drop-down-line"></i>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-md z-50">
          {categories.map((category) => (
            <div
              key={category}
              className="px-4 py-2 hover:bg-green-100 cursor-pointer"
            >
              {category}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
