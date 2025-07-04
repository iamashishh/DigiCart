import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import axios from "axios";
import Account from "../sections/Account";
import CategoriesDropdown from "../product/CategoriesDropdown";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const products = useSelector((state) => state.products?.products || []);
  const cartCount = useSelector((state) => state.cart?.cartCount || 0); // Retrieve cartCount from Redux store
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Search Logic
  // useEffect(() => {
  //   const fetchProducts = () => {
  //     if (query.trim() === "") {
  //       setSearchResults([]);
  //       return;
  //     }

  //     const filteredProducts = products.filter((product) =>
  //       product.title.toLowerCase().includes(query.toLowerCase())
  //     );

  //     setSearchResults(filteredProducts);
  //   };

  //   fetchProducts();
  // }, [query, products]); // Fixed dependency array

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);


  

  return (
    <div
      className={`w-full   font-semibold fixed top-0 left-0 z-40 bg-white py-3 px-5  lg:px-10 justify-between items-center transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Navbar Content */}
      <div className="w-full flex justify-between items-center">
        {/* Logo */}
        <svg
          width="175"
          height="44"
          viewBox="0 0 175 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M53.1384 24.372L57.0864 23.56C57.1797 24.512 57.5437 25.2867 58.1784 25.884C58.8317 26.4627 59.765 26.752 60.9784 26.752C62.0797 26.752 62.9384 26.556 63.5544 26.164C64.1704 25.7533 64.4784 25.184 64.4784 24.456C64.4784 23.8587 64.217 23.3733 63.6944 23C63.1717 22.6267 62.5184 22.3653 61.7344 22.216C60.969 22.0667 60.129 21.8613 59.2144 21.6C58.2997 21.32 57.4504 21.012 56.6664 20.676C55.901 20.3213 55.257 19.7333 54.7344 18.912C54.2117 18.072 53.9504 17.0453 53.9504 15.832C53.9504 14.096 54.6037 12.64 55.9104 11.464C57.217 10.288 58.981 9.7 61.2024 9.7C63.293 9.7 64.9824 10.26 66.2704 11.38C67.5584 12.4813 68.3144 13.8907 68.5384 15.608L64.5904 16.336C64.553 15.44 64.2264 14.7213 63.6104 14.18C63.013 13.62 62.1917 13.34 61.1464 13.34C60.1944 13.34 59.429 13.5547 58.8504 13.984C58.2717 14.3947 57.9824 14.9267 57.9824 15.58C57.9824 16.1213 58.1784 16.56 58.5704 16.896C58.9624 17.232 59.4664 17.4933 60.0824 17.68C60.717 17.8667 61.4077 18.044 62.1544 18.212C62.9197 18.3613 63.6757 18.5667 64.4224 18.828C65.1877 19.0893 65.8784 19.4253 66.4944 19.836C67.129 20.228 67.6424 20.8067 68.0344 21.572C68.4264 22.3373 68.6224 23.252 68.6224 24.316C68.6224 26.108 67.8944 27.5733 66.4384 28.712C65.001 29.832 63.1064 30.392 60.7544 30.392C58.365 30.392 56.545 29.8227 55.2944 28.684C54.0624 27.5267 53.3437 26.0893 53.1384 24.372ZM75.7838 9V16.672C76.6238 15.552 77.9771 14.992 79.8438 14.992C81.5798 14.992 82.9145 15.524 83.8478 16.588C84.7811 17.6333 85.2478 19.052 85.2478 20.844V30H81.2718V21.292C81.2718 19.3693 80.4411 18.408 78.7798 18.408C77.8278 18.408 77.0905 18.6973 76.5678 19.276C76.0451 19.836 75.7838 20.62 75.7838 21.628V30H71.8078V9H75.7838ZM101.109 28.124C99.6903 29.5987 97.8329 30.336 95.5369 30.336C93.2409 30.336 91.3836 29.5987 89.9649 28.124C88.5463 26.6307 87.8369 24.8107 87.8369 22.664C87.8369 20.5173 88.5463 18.7067 89.9649 17.232C91.3836 15.7387 93.2409 14.992 95.5369 14.992C97.8329 14.992 99.6903 15.7387 101.109 17.232C102.528 18.7067 103.237 20.5173 103.237 22.664C103.237 24.8107 102.528 26.6307 101.109 28.124ZM92.8489 19.612C92.1583 20.3587 91.8129 21.376 91.8129 22.664C91.8129 23.952 92.1583 24.9693 92.8489 25.716C93.5583 26.4627 94.4543 26.836 95.5369 26.836C96.6196 26.836 97.5063 26.4627 98.1969 25.716C98.9063 24.9693 99.2609 23.952 99.2609 22.664C99.2609 21.376 98.9063 20.3587 98.1969 19.612C97.5063 18.8653 96.6196 18.492 95.5369 18.492C94.4543 18.492 93.5583 18.8653 92.8489 19.612ZM109.936 28.432V35.824H105.96V15.328H109.628V17.12C110.599 15.7013 112.148 14.992 114.276 14.992C116.348 14.992 117.991 15.72 119.204 17.176C120.417 18.632 121.024 20.4613 121.024 22.664C121.024 24.8667 120.417 26.696 119.204 28.152C117.991 29.608 116.348 30.336 114.276 30.336C113.305 30.336 112.437 30.1587 111.672 29.804C110.925 29.4307 110.347 28.9733 109.936 28.432ZM110.804 19.668C110.151 20.452 109.824 21.4507 109.824 22.664C109.824 23.8773 110.151 24.876 110.804 25.66C111.476 26.444 112.353 26.836 113.436 26.836C114.519 26.836 115.387 26.444 116.04 25.66C116.712 24.876 117.048 23.8773 117.048 22.664C117.048 21.4507 116.712 20.452 116.04 19.668C115.387 18.884 114.519 18.492 113.436 18.492C112.353 18.492 111.476 18.884 110.804 19.668ZM130.146 26.808C130.874 26.808 131.508 26.6027 132.05 26.192C132.591 25.7813 132.936 25.2493 133.086 24.596L137.062 25.268C136.763 26.6307 136.026 27.816 134.85 28.824C133.674 29.832 132.115 30.336 130.174 30.336C128.046 30.336 126.282 29.608 124.882 28.152C123.5 26.6773 122.81 24.848 122.81 22.664C122.81 20.48 123.5 18.66 124.882 17.204C126.282 15.7293 128.046 14.992 130.174 14.992C132.115 14.992 133.674 15.496 134.85 16.504C136.026 17.512 136.763 18.6973 137.062 20.06L133.086 20.732C132.936 20.0787 132.591 19.5467 132.05 19.136C131.508 18.7253 130.874 18.52 130.146 18.52C129.1 18.52 128.279 18.9027 127.682 19.668C127.084 20.4147 126.786 21.4133 126.786 22.664C126.786 23.9147 127.084 24.9227 127.682 25.688C128.279 26.4347 129.1 26.808 130.146 26.808ZM142.818 20.172L139.01 19.472C139.252 18.1653 139.896 17.092 140.942 16.252C142.006 15.412 143.536 14.992 145.534 14.992C147.662 14.992 149.267 15.468 150.35 16.42C151.432 17.372 151.974 18.716 151.974 20.452V26.136C151.974 26.7707 152.235 27.088 152.758 27.088L153.178 27.06V30.084C152.972 30.1587 152.627 30.196 152.142 30.196C150.462 30.196 149.351 29.5893 148.81 28.376C147.596 29.6827 145.907 30.336 143.742 30.336C142.043 30.336 140.755 29.9347 139.878 29.132C139.019 28.3293 138.59 27.2933 138.59 26.024C138.59 23.4293 140.494 21.8147 144.302 21.18L148.194 20.536V20.424C148.194 18.9867 147.307 18.268 145.534 18.268C143.91 18.268 143.004 18.9027 142.818 20.172ZM148.194 23.364L144.694 24.008C143.891 24.1573 143.312 24.372 142.958 24.652C142.603 24.9133 142.426 25.268 142.426 25.716C142.426 26.7427 143.163 27.256 144.638 27.256C145.776 27.256 146.654 26.9573 147.27 26.36C147.886 25.744 148.194 24.9227 148.194 23.896V23.364ZM163.959 15.216V18.94C163.679 18.884 163.418 18.856 163.175 18.856C161.999 18.856 161.112 19.164 160.515 19.78C159.936 20.396 159.647 21.3667 159.647 22.692V30H155.671V15.328H159.339V17.232C160.179 15.8693 161.56 15.188 163.483 15.188L163.959 15.216ZM173.004 26.472V29.916C172.556 30.028 171.931 30.084 171.128 30.084C168.123 30.084 166.62 28.5907 166.62 25.604V18.464H164.632V15.328H166.62V11.688H170.596V15.328H173.032V18.464H170.596V25.184C170.596 26.136 171.091 26.612 172.08 26.612L173.004 26.472Z"
            fill="#003D29"
          />
          <g clip-path="url(#clip0_1107_6023)">
            <path
              d="M20.049 44.0001C17.8866 44.0001 16.1274 42.2619 16.1274 40.1253C16.1274 37.9887 17.8866 36.2505 20.049 36.2505C22.2115 36.2505 23.9706 37.9887 23.9706 40.1253C23.9706 42.2619 22.2115 44.0001 20.049 44.0001ZM20.049 38.5213C19.1527 38.5213 18.4257 39.2418 18.4257 40.1253C18.4257 41.0089 19.1548 41.7293 20.049 41.7293C20.9433 41.7293 21.6724 41.0089 21.6724 40.1253C21.6724 39.2418 20.9433 38.5213 20.049 38.5213Z"
              fill="#013D28"
            />
            <path
              d="M31.6296 44.0001C29.4672 44.0001 27.708 42.2619 27.708 40.1253C27.708 37.9887 29.4672 36.2505 31.6296 36.2505C33.792 36.2505 35.5512 37.9887 35.5512 40.1253C35.5512 42.2619 33.792 44.0001 31.6296 44.0001ZM31.6296 38.5213C30.7333 38.5213 30.0062 39.2418 30.0062 40.1253C30.0062 41.0089 30.7354 41.7293 31.6296 41.7293C32.5238 41.7293 33.253 41.0089 33.253 40.1253C33.253 39.2418 32.5238 38.5213 31.6296 38.5213Z"
              fill="#013D28"
            />
            <path
              d="M13.8854 41.0538C13.4112 41.0538 12.9682 40.7627 12.8011 40.2961L4.79074 17.844H1.14911C0.513965 17.844 0 17.3362 0 16.7086C0 16.0811 0.513965 15.5732 1.14911 15.5732H5.60348C6.09028 15.5732 6.52485 15.8767 6.68782 16.3309L14.9698 39.5385C15.1808 40.131 14.8674 40.7792 14.2678 40.9877C14.1403 41.0311 14.0129 41.0538 13.8854 41.0538V41.0538Z"
              fill="#013D28"
            />
            <path
              d="M37.0494 38.1083C36.7548 38.1083 36.4623 37.9968 36.2366 37.7759C35.7874 37.3321 35.7874 36.6137 36.2366 36.1698L38.1797 34.2499V33.0423H11.8107C11.1756 33.0423 10.6616 32.5345 10.6616 31.9069C10.6616 31.2793 11.1756 30.7715 11.8107 30.7715H39.3309C39.966 30.7715 40.48 31.2793 40.48 31.9069V34.7206C40.48 35.022 40.3588 35.311 40.1436 35.5237L37.8642 37.7759C37.6406 37.9968 37.346 38.1083 37.0514 38.1083H37.0494Z"
              fill="#013D28"
            />
            <path
              d="M39.3308 33.0404C38.6956 33.0404 38.1816 32.5326 38.1816 31.905V23.4225C38.1816 22.7949 38.6956 22.2871 39.3308 22.2871C39.9659 22.2871 40.4799 22.7949 40.4799 23.4225V31.905C40.4799 32.5326 39.9659 33.0404 39.3308 33.0404Z"
              fill="#013D28"
            />
            <path
              d="M26.3042 17.1508V5.50361C26.3042 2.46486 28.7988 0 31.8742 0V11.6472C31.8742 14.6859 29.3796 17.1508 26.3042 17.1508Z"
              fill="#08AC0A"
            />
            <path
              d="M16.9692 9.34326H18.7848C22.1444 9.34326 24.8709 12.0373 24.8709 15.3568V17.1507H23.0553C19.6958 17.1507 16.9692 14.4567 16.9692 11.1372V9.34326V9.34326Z"
              fill="#08AC0A"
            />
            <path
              d="M35.0481 28.1604C35.0481 22.9293 30.7546 18.687 25.4603 18.687C20.1661 18.687 15.8726 22.9293 15.8726 28.1604H35.0481Z"
              fill="#FF7006"
            />
          </g>
          <defs>
            <clipPath id="clip0_1107_6023">
              <rect width="40.48" height="44" fill="white" />
            </clipPath>
          </defs>
        </svg>

        {/* Navigation Links */}
        <ul className="hidden max-sm:hidden max-md:block max-md:flex max-md:gap-4 max-md:text-[1.8vw] max-md:items-center max-md:justify-center md:block md:flex md:gap-4 md:text-[1.2vw] md:items-center md:justify-center lg:flex gap-10 relative">
          {/* Categories with Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <div>
              <CategoriesDropdown/>
            </div>
          </li>
          <li>
            <Link className="hover:text-[#016630] transition-colors duration-200">
              Deals
            </Link>
          </li>
          <li>
            <Link className="hover:text-[#016630] transition-colors duration-200">
              What's New
            </Link>
          </li>
          <li>
            <Link className="hover:text-[#016630] transition-colors duration-200">
              Delivery
            </Link>
          </li>
        </ul>

        {/* Search Bar and Account/Cart */}
        <div className="flex gap-5 items-center">
          {/* Search Bar */}
          <div className="relative  max-sm:hidden max-md:hidden w-70">
            <input
              className="outline-none rounded-2xl px-10 py-3 bg-[#F5F6F6] w-full"
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

           
          </div>

           {/* Search Results */}
           {searchResults.length > 0 && (
              <div className="fixed top-14 right-49   w-72 max-h-[40vh] bg-white border border-zinc-300 shadow-md rounded-lg mt-2 overflow-auto z-50">
                {searchResults.map((product) => (
                  <Link
                    to={`/details/${product.id}`}
                    key={product.id}
                    className="flex items-center gap-4 p-3 hover:bg-zinc-100 duration-200 border-b border-zinc-200"
                    onClick={() => setQuery("")}
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

          {/* Account & Cart */}
        
            <Account/>
        

          <Link
            to="/cart"
            className="flex items-center gap-1 hover:text-[#016630] transition-colors duration-200 relative"
          >
            <i className="ri-shopping-cart-2-line text-xl"></i>
            <span className="max-sm:hidden lg:block md:block max-md:block">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div
        className={`relative md:hidden lg:hidden w-full mt-4 transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0 hidden"
        }`}
      >
        <input
          className="outline-none rounded-2xl px-10 py-3 bg-[#F5F6F6] w-full"
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
                onClick={() => setQuery("")}
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
    </div>
  );
};

export default Navbar;
