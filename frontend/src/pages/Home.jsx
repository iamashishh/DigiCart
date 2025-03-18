import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import Topbanner from "../components/Topbanner";
import FilterSection from "../components/FilterSection";


const Home = () => {
  
   
  return (
    <div className="w-full   flex flex-col items-center ">
     
    <Banner/>
    <FilterSection/>
    <Cards/>


    </div>
  );
};

export default Home;
