import React from 'react'

const FilterSection = () => {
  return (
    <div className="w-full h-auto mt-[3vw] mb-[3vw] flex justify-between items-start">
    {/* Left Side - Filters */}
    <div className="flex flex-wrap gap-3 "> 
      {["Headphone Type", "Price", "Review", "Color", "Material", "Offer"].map((item, index) => (
        <div key={index} className="h-fit w-fit px-5 py-2 bg-[#EBEDEC] font-semibold rounded-full text-sm flex items-center">
          {item} <i className="ri-arrow-down-s-line ml-1"></i>
        </div>
      ))}
      <div className="h-fit w-fit px-6 py-2 bg-[#EBEDEC] font-semibold rounded-full text-sm flex gap-2 items-center">
        All Filters <i class="ri-equalizer-fill"></i>
      </div>
    </div>
  
    {/* Right Side - Sort By (Always in Row) */}
    <div className="h-fit w-fit px-5 py-2 bg-[#EBEDEC] font-semibold rounded-full text-sm flex items-center whitespace-nowrap">
      Sort by <i className="ri-arrow-down-s-line ml-1"></i>
    </div>
  </div>
  
  )
}

export default FilterSection
