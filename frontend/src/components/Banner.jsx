import React from "react";

const Banner = () => {
  return (
    <div className="w-full h-[30vh] mt-[34%] md:mt-[5%] lg:mt-[5%] flex items-center justify-between   max-sm:px-6  px-20 bg-[#FCF0E4FF] ">
      <div className="flex flex-col gap-5">
        <h1 className="w-[22vw] font-archivo text-[2vw] leading-[3vw]  max-sm:text-xl  max-sm:leading-normal max-sm:w-[45vw] max-sm:font-semibold  font-bold text-[#046664]">
          Grab Upto 50% Off On Selected Headphone
        </h1>
        <button
          className=" w-[20vw] lg:w-[6vw] md:w-[12vw] md:px-3 py-2 px-5 lg:px-3 lg:py-3 flex items-center justify-center 
         font-inter lg:text-[1vw] md:text-[1.5vw] text-[2.4vw] leading-[15px] font-semibold text-white 
         bg-[#046664] opacity-100 rounded-full "
        >
          Buy Now
        </button>
      </div>
      <div>
        <img className="h-40 mt-4" src="./banner.png" alt="Headphones" />
      </div>
    </div>
  );
};

export default Banner;
