import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CategoriesDropdown = () => {
    const [isHovered, setIsHovered] = useState(false);

  return (
    <div>

            <div className="relative"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <Link
                            to=""
                            className="flex items-center gap-1 hover:text-green-800 transition-colors duration-200"
                        >
                    
                            <span className="hidden lg:block md:block">
                            Categories <i class="ri-arrow-drop-down-line"></i>
                            </span>
                        </Link>
            
                        {isHovered && (
                            <div 
                                className="infoaccount absolute bg-white top-4 left-0 w-60  border border-zinc-300 z-[99] shadow-md rounded-lg mt-2 overflow-hidden"
                                onMouseEnter={() => setIsHovered(true)}   
                                onMouseLeave={() => setIsHovered(false)}   
                            >
                                
                                <ul className="p-2">
                                    <li><Link to="" className="py-1 px-2 hover:text-green-800">Mobile</Link></li>
                                    <li><Link to="" className="py-1 px-2 hover:text-green-800">Tv</Link></li>
                                    <li><Link to="" className="py-1 px-2 hover:text-green-800">Tab</Link></li>
                                </ul>
                            </div>
                        )}
                    </div>
    </div>
  )
}

export default CategoriesDropdown