import React from "react";


import Cards from "../components/product/Cards";
import Navbar from "../components/layout/Navbar"
import Banner from "../components/sections/Banner"
import { useSelector } from "react-redux";


const Home = () => {
  
  return (

    <div className="w-full  flex flex-col items-center ">
    <Navbar/>
     
    <Banner/>
  
    <Cards/>


    </div>
  );
};

export default Home;
