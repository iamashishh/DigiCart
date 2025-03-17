import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetproducts } from "../store/actions/ProductAction";
import Navbar from "../components/Navbar";
import { addToCart } from "../store/Reducers/CartReducer";
import { asyncAddToCart } from "../store/actions/CartActions";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useSelector((state) => state.products) || {
    products: [],
  };
  const dispatch = useDispatch();
  const navigator = useNavigate();


  useEffect(() => {
    dispatch(asyncgetproducts());
  }, [dispatch]);

  const product = products.find((p) => p.id === Number(id));

  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);

  if (!product) {
    return <div className="text-center py-10">Product not found!</div>;
  }

  return (
    <>
        <div className="w-full border-t-2 mt-[5%] border-gray-100 my-4 "></div>

    <div className="w-full  flex px-10  md:flex-row gap-20 justify-center items-center">
      
      <i
        onClick={() => navigator(-1)}
        className="ri-arrow-left-line cursor-pointer absolute top-17 left-6 text-2xl font-black"
      ></i>
      {/* images */}
      <div className="w-full h-full md:w-[50%] flex-col  items-center gap-8 flex justify-center">
         <div className="w-full flex justify-center items-center p-10 rounded-lg bg-[#F6F6F6] ">
         <img
            src={product.image || ""}
            alt={product.title || "Product Image"}
            className="w-[50%]  md:max-w-[400px] rounded-lg object-cover"
          /> 
         </div>

         <div className="w-full flex justify-center items-center gap-4">
          
         <div className="w-[30%] flex justify-center items-center p-5 rounded-lg bg-[#F6F6F6] ">
         <img
            src={product.image || ""}
            alt={product.title || "Product Image"}
            className="w-[60%]  md:max-w-[400px] rounded-lg object-cover"
          /> 
         </div>
         <div className="w-[30%] flex justify-center items-center p-5 rounded-lg bg-[#F6F6F6] ">
         <img
            src={product.image || ""}
            alt={product.title || "Product Image"}
            className="w-[60%]  md:max-w-[400px] rounded-lg object-cover"
          /> 
         </div>
         <div className="w-[30%] flex justify-center items-center p-5 rounded-lg bg-[#F6F6F6] ">
         <img
            src={product.image || ""}
            alt={product.title || "Product Image"}
            className="w-[60%]  md:max-w-[400px] rounded-lg object-cover"
          /> 
         </div>
         <div className="w-[30%] flex justify-center items-center p-5 rounded-lg bg-[#F6F6F6] ">
         <img
            src={product.image || ""}
            alt={product.title || "Product Image"}
            className="w-[60%]  md:max-w-[400px] rounded-lg object-cover"
          /> 
         </div>

         </div>
      </div>
     
      {/* details */}
      <div className="w-full h-full md:w-[50%] flex-col  items-start  flex justify-center">
        <div>
          <h1 className="text-2xl md:text-2xl font-bold">{product.title}</h1>
          <p className=" mt-2">{product.description}</p>
          <div className="flex items-center">
            <span className="text-green-500 text-lg">★★★★★</span>
            <span className="text-green-500 ml-2">
              ({product.rating?.count || 0})
            </span>
          </div>
        </div>

        <div className="w-[57%] border-t-2 border-gray-100 my-4"></div>

        <div className="text-xl font-bold ">
          ${product.price || "N/A"}
          <p className="text-[50%] mt-1 font-medium text-gray-400">Suggested payment whith 6 mounths special financing</p>
        </div>

        <div className="w-[57%] border-t-2 border-gray-100 my-4"></div>

        <div className="bg-gray-600 w-[50%] h-[10%]"></div>
        <div className="mt-3 flex items-center gap-4">
        <div className="border-2 border-[#ededed] flex gap-5 items-center  justify-between py-1 px-6 rounded-full w-full md:w-auto bg-[#ededed]">
        <button
            onClick={decreaseQuantity}
            className="text-2xl cursor-pointer"
          >
            -
          </button>
          <span className="text-lg">{quantity}</span>
          <button
            className="text-2xl cursor-pointer"
            onClick={increaseQuantity}
          >
            +
          </button>
        </div>
          <span className="text-red-500 ml-2">
            Only {Math.floor(Math.random() * 50) + 1} Items Left!
          </span>
        </div>

        <div className="flex gap-4 mt-5">
          <button className="border-2 border-[#046664] font-semibold  text-[#046664] py-2 px-8 rounded-full w-full md:w-auto hover:bg-[#046664] hover:text-white">
            Buy Now
          </button>
          <button  onClick={() => dispatch(asyncAddToCart({
        id: product.id,
        name: product.name,
        price: product.price,   
        image: product.image
    },console.log('add to cart')))} className="border-2 font-semibold border-[#046664]  text-[#046664] py-2 px-8 rounded-full w-full md:w-auto hover:bg-[#046664] hover:text-white">
            Add to Cart
          </button>
        </div>

        <div className="mt-5 flex flex-col font-medium  w-[60%]">
          <div className="text-sm  p-4 border-[#85858531] border">
          <p>
            <i className=" text-orange-400 text-lg ri-caravan-line"></i> Free
            Delivery -{" "}
          </p>
          <p className=" underline ml-6 text-[#7E7B7C]">
              Enter your Postal code for Delivery Availability
            </p>
          </div>
          <div className="text-sm p-4 border-[#85858531] border">
            <i className="text-orange-400 text-lg ri-loop-left-line"></i> Return  Delivery -
          <p className="ml-6 text-[#7E7B7C]" >
          Free 30-day returns.{" "}
          <span className="underline ">Details</span>
          </p>
          </div>
        </div>
      </div>
    </div>
</>
  );
};

export default ProductDetails;
