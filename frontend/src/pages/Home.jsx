import React, { useEffect } from "react";


import Cards from "../components/product/Cards";
import Navbar from "../components/layout/Navbar"
import Banner from "../components/sections/Banner"

import CategorySection from "../components/product/CategorySection";
import { Axios } from "axios";
import { useSelector } from "react-redux";



const Home = () => {


  useEffect(() => {
    
  const productsData = async ()=>{
    const response  = await Axios.get("/products/all-products",{

    })
  }
  
  productsData();

  }, [])
  

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
