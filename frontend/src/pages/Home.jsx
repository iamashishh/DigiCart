import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import Topbanner from "../components/Topbanner";


const Home = () => {
  
   
  return (
    <div className="w-[100vw] px-5 flex flex-col items-center ">
     
    <Topbanner/>
    <Navbar/>
    <Banner/>
    <Cards/>


    </div>
  );
};

export default Home;
