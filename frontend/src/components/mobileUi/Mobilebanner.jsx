import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const MobileBanner = () => {
  const slides = [
    "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",

  ];

  return (
    <div className="bg-white max-sm:px-4 max-md:px-6 lg:px-8 w-screen overflow-hidden  max-sm:mt-36  max-md:mt-34 lg:mt-30">
      <Swiper
        modules={[Autoplay, Pagination]}
        
        spaceBetween={10}
  slidesPerView={1}
  loop={true}
  speed={1000}
  autoplay={{
    delay: 5000,
    disableOnInteraction: false,
  }}
  pagination={{
    clickable: true, // ✅ Enables clickable dots
  }}
        className="rounded-2xl overflow-hidden"
      >
        {slides.map((_, index) => (
          <SwiperSlide key={index}>
            <div className="max-sm:h-40  max-md:h-50 lg:h-60 bg-green-300  w-full rounded-2xl text-white px-4 flex justify-between items-center">
                <div className="flex  flex-col text-black  gap-2 ml-4">
                    <h1 className="text-2xl font-bold">Limited Time Offer!</h1>
                    <p className="text-sm">Get 50% off on selected items</p>
                </div>
                <img
                    src={slides[index]}
                    alt={`Slide ${index + 1}`}
                    className="w-32 h-32 object-fit bg-green-300  rounded"
                />
            </div>
          </SwiperSlide>
        ))}
        
      </Swiper>
    </div>
  );
};

export default MobileBanner;
