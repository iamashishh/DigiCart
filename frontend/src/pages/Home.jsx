import React, { useEffect } from "react";


import Cards from "../components/product/Cards";
import Navbar from "../components/layout/Navbar"
import Banner from "../components/sections/Banner"

import CategorySection from "../components/product/CategorySection";
import { Axios } from "axios";
import { useSelector } from "react-redux";
import MobileBanner from "../components/mobileUi/Mobilebanner";



const Home = () => {




  

  return (

    <div className="w-full   flex flex-col items-center ">
    <Navbar/>
     
    {/* <Banner/> */}
    <MobileBanner/>
    <CategorySection/>
  
    <Cards/>


    </div>
  );
};

export default Home;
