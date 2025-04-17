import React from "react";


import Cards from "../components/product/Cards";
import Navbar from "../components/layout/Navbar"
import Banner from "../components/sections/Banner"
import { useSelector } from "react-redux";
import CategorySection from "../components/product/CategorySection";


const Home = () => {
  
  return (

    <div className="w-full  flex flex-col items-center ">
    <Navbar/>
     
    <Banner/>
    <CategorySection/>
  
    <Cards/>


    </div>
  );
};

export default Home;
