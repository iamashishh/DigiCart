import React, { useEffect } from "react";


import Cards from "../components/product/Cards";
import Navbar from "../components/layout/Navbar"
import Banner from "../components/sections/Banner"

import CategorySection from "../components/product/CategorySection";


const Home = () => {

   useEffect(() => {

   },[])  
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
