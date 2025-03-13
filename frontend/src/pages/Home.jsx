import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Cards from "../components/Cards";


const Home = () => {
  
   
  return (
    <div className="w-[100vw] px-5 flex flex-col items-center ">
      <div className=" absolute top-0 left-0 popup-top px-8 py-4 w-[100vw] text-white  flex justify-between items-center h-[5vh] bg-[#003C26] overflow-hidden rounded-none border border-[#003C26] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1F]">
        <div>
          <p className=" ">+001234567890</p>
        </div>
        <div className="flex items-center gap-5">
          <p>Get 50% Off on Selected Items</p>
          <Link className=" text-lg font-bold">Shop Now</Link>
        </div>
        <div className="flex items-center gap-5">
          <Link className=" text-lg font-bold">Eng</Link>
          <Link className=" text-lg font-bold">Location</Link>
        </div>
      </div>

    <Navbar/>
    <Banner/>
    <Cards/>


    </div>
  );
};

export default Home;
