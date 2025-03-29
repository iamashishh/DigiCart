import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import toast from 'react-hot-toast';

const Slider = () => {
  const imageList = [
    "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"
  ];

  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  const copyToClipboard = () => {
    const productUrl = window.location.href;
    navigator.clipboard.writeText(productUrl);
    toast.success("Product link copied!");
  };

  return (
    <div className='h-full w-full flex items-center relative'>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        pagination={{ dynamicBullets: true }}
        modules={[Pagination]}
        className='w-full h-full p-4'
      >
        {imageList.map((image, index) => (
          <SwiperSlide key={index} className='h-full w-full flex items-center justify-center'>
            <div className='flex items-center w-full h-full justify-center'>
              <img src={image} alt='' className='w-[70%] h-[70%] p-2 rounded-xl object-fit' />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Like & Share Buttons */}
      <div className='absolute top-[1vw] right-2 z-10 flex flex-col gap-2'>
        <button className='bg-white p-2 rounded-full shadow-md hover:bg-gray-100' onClick={toggleLike}>
          <i className={`ri-heart-${liked ? "fill" : "line"} text-xl ${liked ? "text-red-500" : "text-gray-700"}`}></i>
        </button>
        <button className='bg-white p-2 rounded-full shadow-md hover:bg-gray-100' onClick={copyToClipboard}>
          <i className='ri-share-line text-xl text-gray-700'></i>
        </button>
      </div>
    </div>
  );
};

export default Slider;
