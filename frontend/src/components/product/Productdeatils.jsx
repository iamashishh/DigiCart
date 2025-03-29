import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetproducts } from "../../store/actions/ProductAction";
import Navbar from "../layout/Navbar";
import { addToCart } from "../../store/Reducers/CartReducer";
import { asyncAddToCart } from "../../store/actions/CartActions";
import toast from 'react-hot-toast';
import swipeImage from "../mobileUi/Slider";
import Slider from "../mobileUi/Slider";



const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useSelector((state) => state.products) || { products: [] };
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    dispatch(asyncgetproducts());
  }, [dispatch]);

  const product = products.find((p) => p.id === Number(id));

  useEffect(() => {
    if (product) {
      setMainImage(product.image); // Set default image on load
    }
  }, [product]);

  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);

  if (!product) {
    return <div className="text-center py-10">Product not found!</div>;
  }

  const imageList = [
    product.image,
    "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
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
    <>
      <div className="w-full  border-t-2 lg:mt-[5%] max-md:mt-[17%] max-sm:mt-[40%] border-gray-100 my-4   "></div>
      <div className=" ml-10 lg:block md:block hidden text-sm  sm:text-md font-medium text-gray-600">
      <i
          onClick={() => navigator(-1)}
          className="ri-arrow-left-line cursor-pointer  absolute top-22 left-10 text-xl text-black font-black"
        ></i>    <p>Electronics / Audio / Headphones / Shop Headphones by type / Airpods-Max</p>
            </div>
      <div className="w-full   overflow-y-auto pb-20 flex flex-col  md:px-10 md:flex-row gap-20 justify-center items-center">
        

        {/* Images Section */}
        <div className="w-full h-full md:w-[60%]  lg:w-[50%] flex-col lg:flex-col items-center gap-8 flex justify-center overflow-hidden">
          <div className="w-full max-sm:w-full max-sm:h-[54vh] max-sm:block lg:hidden max-md:hidden h-fit max-md:h-[50vh]  max-md:w-[50vw] bg-blac overflow-hidden  lg:h-[60vh] md:h-[40vh]  flex justify-center items-center  shadow-lg border border-gray-300 rounded-xl ">
            <Slider mainImage='mainImage' />
          </div>
          <div className="relative w-full max-sm:w-full max-sm:hidden h-fit max-md:h-[50vh] max-md:w-[50vw] overflow-hidden lg:h-[60vh] md:h-[40vh] flex justify-center items-center p-10 shadow-lg border border-gray-300 rounded-xl">
  <img
    src={mainImage}
    alt={product.title || "Product Image"}
    className="w-[60%] lg:w-[40%] md:max-w-[400px] rounded-lg object-cover"
  />
  
  {/* Like and Share Icons */}
  <div className="absolute top-4 right-4 flex flex-col gap-2">
    <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 "onClick={toggleLike}>
      <i className={`ri-heart-${liked ? "fill" : "line"} text-xl ${liked ? "text-red-500" : "text-gray-700"}`}></i>
    </button>
    <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100" onClick={copyToClipboard}>
      <i className="ri-share-line text-xl text-gray-700"></i>
    </button>
  </div>
</div>


          <div className="ScrollBar w-full cursor-pointer scrollbar-hide lg:overflow-hidden overflow-x-auto overflow-y-hidden max-sm:pl-32 max-sm:hidden max-md:block  max-md:pl-  whitespace-nowrap flex justify-center items-center gap-4">
           <div className="flex  gap-4 ">
           {imageList.map((img, index) => (
              <div
                key={index}
                className={` max-md:w-fit md-fit max-sm:h-[16vh] md:h-[15vh] max-md:h-[15vh] max-sm:w-[40vw] bg-blac lg:w-[30%] lg:h-[15vh] flex justify-center items-center p-5 overflow-hidden rounded-lg ${mainImage === img ? 'border-2 border-green-500' : 'shadow-lg border border-gray-300 rounded-xl'}`}
                onClick={() => setMainImage(img)}
              >
                <img
                  src={img}
                  alt={`Product Image ${index}`}
                  className="w-[60%] p-2 md:max-w-[400px]  rounded-lg object-cover"
                />
              </div>
            ))}
           </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full h-full max-sm:mt-[-14vw] max-md:mt-[-6vw] md:w-[50%] flex-col items-start flex justify-center">
          <div>
            <h1 className="text-2xl  font-bold text-gray-800">{product.title}</h1>
            <p className="text-sm sm:text-base font-medium text-gray-500 mt-2">{product.description.slice(0, 200)}...<span className="text-blue-600 cursor-pointer ">more</span></p>
            <div className="text-green-500 flex items-center mt-2">
                        <i className="ri-star-s-fill"></i>
                        <i className="ri-star-s-fill"></i>
                        <i className="ri-star-s-fill"></i>
                        <i className="ri-star-s-fill"></i>
              <span className="text-black ml-1">({product.rating?.count || 0})</span>
                    </div>
          </div>

          <div className="w-[57%] border-t-2 border-gray-100 my-4"></div>

          <div className="text-lg font-bold mt-4 ">
            ${product.price || "N/A"}
            <p className="text-sm font-medium text-gray-500 mt-1">
              Suggested payment with 6 months special financing
            </p>
          </div>

          <div className="w-[57%] border-t-2 border-gray-100 my-4"></div>

          <div className="bg-gray-600 w-[50%] h-[10%]"></div>

          {/* Quantity Management */}
          <div className="mt-3 flex items-center gap-4">
            <div className="border-2 border-[#ededed] flex gap-3 lg:gap-5 items-center justify-between py-1 px-4 lg:px-6 rounded-full w-full md:w-auto bg-[#ededed]">
              <button onClick={decreaseQuantity} className="px-2 py-1 font-semibold"><i className="ri-subtract-line"></i></button>
              <span className="px-4 font-semibold">{quantity}</span>
                        
                                <button className="tpx-2 py-1 font-semibold" onClick={increaseQuantity}><i className="ri-add-line"></i></button>
            </div>
            <div>
                            <h4 className="text-gray-600 text-sm font-semibold  w-[40vw] lg:w-full">
                                Only <span className="text-orange-500">12 Items</span> Left!
                            </h4>
                            <h4 className="text-gray-600 text-sm font-semibold w-full">
                                Don’t miss it
                            </h4>
                        </div>
          </div>

          {/* Action Buttons */}
          <div className="flex hidden lg:block md:block  lg:flex   lg:gap-4 lg:mt-6">
            <button className="bg-green-800 text-white px-10 font-semibold py-2 rounded-full hover:bg-green-700">
              Buy Now
            </button>
            <button
              onClick={() =>
                dispatch(
                  asyncAddToCart(
                    {
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.image,
                    },
                    // console.log("add to cart")
                    toast.success('Added to cart',)
                  )
                )
              }
              className="border-2 border-green-800 text-green-800 hover:bg-green-800 hover:text-white px-7 py-2 rounded-full transition-all duration-300 font-semibold"
            >
              Add to Cart
            </button>
          </div>

          {/* Delivery Details */}
          <div className="mt-8 flex flex-col  font-medium w-full">
            <div className="text-sm p-4 border-[#85858531] rounded-t-xl border">
              <p>
                <i className="text-orange-400 text-lg ri-caravan-line"></i> Free Delivery -{" "}
              </p>
              <p className="underline ml-6 text-[#7E7B7C]">
                Enter your Postal code for Delivery Availability
              </p>
            </div>
            <div className="text-sm p-4 border-[#85858531] border rounded-b-xl">
              <i className="text-orange-400 text-lg ri-loop-left-line"></i> Return Delivery -
              <p className="ml-6 text-[#7E7B7C]">
                Free 30-day returns. <span className="underline">Details</span>
              </p>
            </div>
          </div>

            {/* // Mobile View bottom buttons  */}
          <div className=" fixed bottom-0 left-0 w-full  h-fit bg-white gap-2 shadow-lg p-2 flex justify-center  md:hidden lg:hidden ">
            <button className="bg-green-800 text-white w-[50%]   font-semibold py-2 rounded  hover:bg-green-700">
              Buy Now
            </button>
            <button
              onClick={() =>
                dispatch(
                  asyncAddToCart(
                    {
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.image,
                    },
                    // console.log("add to cart")
                    toast.success('Added to cart')
                  )
                )
              }
              className="border-2 border-green-800 w-[50%] px-6 bg-white text-green-800 hover:bg-green-800 hover:text-white px- py-2 rounded transition-all duration-300 font-semibold"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
<div className="flex space-x-4">
<div className="h-[15vh] w-[40vw] bg-black ">

</div>
 <div className="h-[15vh] w-[40vw] bg-black ">

</div>
<div className="h-[15vh] w-[40vw] bg-black ">

</div>
<div className="h-[15vh] w-[40vw] bg-black ">

</div>
</div>