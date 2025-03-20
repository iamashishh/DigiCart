import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Account = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link
                to="/login"
                className="flex items-center gap-1 hover:text-green-800 transition-colors duration-200"
            >
                <i className="ri-user-3-line text-xl"></i>
                <span className="hidden lg:block max:md:block md:block">Login</span>
            </Link>

            {isHovered && (
                <div 
                    className="infoaccount top-10 right-0 w-60 p-2 border border-zinc-300 z-[99] shadow-md rounded-lg mt-2 overflow-hidden"
                    onMouseEnter={() => setIsHovered(true)}   // Ensures dropdown stays open
                    onMouseLeave={() => setIsHovered(false)}   // Hides dropdown when leaving
                >
                    <div className='flex justify-around'>
                        <h1>New User?</h1>
                        <Link to="/register" className='text-blue-500'>Sign Up</Link>
                    </div>
                    <ul className="p-2">
                        <li><Link to="/profile" className="py-1 px-2 hover:text-green-800"><i className="ri-account-box-line"></i>Profile</Link></li>
                        <li><Link to="/settings" className="py-1 px-2 hover:text-green-800"><i className="ri-settings-2-line"></i>Settings</Link></li>
                        <li><Link to="/logout" className="py-1 px-2 hover:text-green-800"><i className="ri-logout-box-line"></i>Logout</Link></li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Account;
