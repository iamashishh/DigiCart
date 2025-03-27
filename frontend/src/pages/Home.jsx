import React from "react";

import FilterSection from "../components/sections/FilterSection";

import Cards from "../components/product/Cards";
import Navbar from "../components/layout/Navbar"
import Banner from "../components/sections/Banner"


const Home = () => {
  

  return (

    <div className="w-full  flex flex-col items-center ">
    <Navbar/>
     
    <Banner/>
    <FilterSection/>
    <Cards/>


    </div>
  );
};

export default Home;
