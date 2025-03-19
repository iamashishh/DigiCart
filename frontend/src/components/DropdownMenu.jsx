import React from 'react'

const DropdownMenu = () => {
  return (
    <div ref={dropdownRef} className="relative ">
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className="font-semibold cursor-pointer rounded-md transition"
      >
       
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-md z-50">
          {categories.map((category)=> (
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

export default DropdownMenu