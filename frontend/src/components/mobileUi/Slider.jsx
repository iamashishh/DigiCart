import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
// import './styles.css';
const Slider = () => {
    
  const imageList = [
    
    "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
  ];

  return (
    <div className='h-full w-full flex items-center  '>
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      pagination={{
        dynamicBullets: true,
       }}
       modules={[Pagination]}
      navigation={{ clickable: true }}
  
      className='w-full h-full p-4'
    >
    <div className='w-full flex  h-fit p-4'>
    {imageList.map((image, index) => (
        <SwiperSlide className='pl-6  flex items-center justify-center' key={index}>
          <img src={image} alt="" className='w-[90%] h-[90%] bg-green- p-2  rounded-xl object-fit' />
        </SwiperSlide>
      ))}
    </div>
    </Swiper>
    </div>
  )
}

export default Slider
