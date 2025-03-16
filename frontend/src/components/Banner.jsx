import React from "react";

const Banner = () => {
  return (
    <div className="w-full h-[30vh] mt-[6%] flex items-center justify-between  max-sm:px-2 px-20 bg-[#FCF0E4FF] ">
      <div className="flex flex-col gap-5">
        <h1 className="w-[16vw] font-archivo text-[22px] leading-[32px]  max-sm:text-sm  max-sm:leading-normal max-sm:w-[45vw] max-sm:font-normal  font-bold text-[#046664]">
          Grab Upto 50% Off On Selected Headphone
        </h1>
        <button
          className="w-[91px] h-[35px]  px-3 flex items-center justify-center 
         font-inter text-[10px] leading-[15px] font-normal text-[#CBE4DD] 
         bg-[#046664] opacity-100 rounded-[18px] border border-[#648372]"
        >
          Buy Now
        </button>
      </div>
      <div>
        <img src="./banner.png" alt="Headphones" />
      </div>
    </div>
  );
};

export default Banner;
