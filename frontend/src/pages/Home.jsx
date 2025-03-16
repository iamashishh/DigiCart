import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import Topbanner from "../components/Topbanner";


const Home = () => {
  
   
  return (
    <div className="w-full px-5 max-sm:px-2  flex flex-col items-center ">
     
    <Banner/>
    <Cards/>


    </div>
  );
};

export default Home;
