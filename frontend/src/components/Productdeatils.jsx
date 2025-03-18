import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetproducts } from "../store/actions/ProductAction";
import Navbar from "../components/Navbar";
import { addToCart } from "../store/Reducers/CartReducer";
import { asyncAddToCart } from "../store/actions/CartActions";

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

  return (
    <>
      <div className="w-full border-t-2 mt-[5%] border-gray-100 my-4 "></div>
      <div className=" ml-10 text-sm sm:text-md font-medium text-gray-600">
      <i
          onClick={() => navigator(-1)}
          className="ri-arrow-left-line cursor-pointer absolute top-22 left-10 text-xl text-black font-black"
        ></i>    <p>Electronics / Audio / Headphones / Shop Headphones by type / Airpods-Max</p>
            </div>
      <div className="w-full flex px-10 md:flex-row gap-20 justify-center items-center">
        

        {/* Images Section */}
        <div className="w-full h-full md:w-[50%] flex-col items-center gap-8 flex justify-center">
          <div className="w-full h-[60vh] flex justify-center items-center p-10 shadow-lg border border-gray-300 rounded-xl ">
            <img
              src={mainImage}
              alt={product.title || "Product Image"}
              className="w-[40%] md:max-w-[400px] rounded-lg object-cover"
            />
          </div>

          <div className="w-full cursor-pointer flex justify-center items-center gap-4">
            {imageList.map((img, index) => (
              <div
                key={index}
                className={`w-[30%] h-[15vh] flex justify-center items-center p-5 rounded-lg ${mainImage === img ? 'border-2 border-green-500' : 'shadow-lg border border-gray-300 rounded-xl'}`}
                onClick={() => setMainImage(img)}
              >
                <img
                  src={img}
                  alt={`Product Image ${index}`}
                  className="w-[60%] md:max-w-[400px] rounded-lg object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full h-full md:w-[50%] flex-col items-start flex justify-center">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">{product.title}</h1>
            <p className="text-sm sm:text-base font-medium text-gray-500 mt-2">{product.description}</p>
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
            <div className="border-2 border-[#ededed] flex gap-5 items-center justify-between py-1 px-6 rounded-full w-full md:w-auto bg-[#ededed]">
              <button onClick={decreaseQuantity} className="px-2 py-1 font-semibold"><i className="ri-subtract-line"></i></button>
              <span className="px-4 font-semibold">{quantity}</span>
                        
                                <button className="tpx-2 py-1 font-semibold" onClick={increaseQuantity}><i className="ri-add-line"></i></button>
            </div>
            <div>
                            <h4 className="text-gray-600 text-sm font-semibold w-full">
                                Only <span className="text-orange-500">12 Items</span> Left!
                            </h4>
                            <h4 className="text-gray-600 text-sm font-semibold w-full">
                                Don’t miss it
                            </h4>
                        </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
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
                    console.log("add to cart")
                  )
                )
              }
              className="border-2 border-green-800 text-green-800 hover:bg-green-800 hover:text-white px-7 py-2 rounded-full transition-all duration-300 font-semibold"
            >
              Add to Cart
            </button>
          </div>

          {/* Delivery Details */}
          <div className="mt-8 flex flex-col font-medium w-[60%]">
            <div className="text-sm p-4 border-[#85858531] border">
              <p>
                <i className="text-orange-400 text-lg ri-caravan-line"></i> Free Delivery -{" "}
              </p>
              <p className="underline ml-6 text-[#7E7B7C]">
                Enter your Postal code for Delivery Availability
              </p>
            </div>
            <div className="text-sm p-4 border-[#85858531] border">
              <i className="text-orange-400 text-lg ri-loop-left-line"></i> Return Delivery -
              <p className="ml-6 text-[#7E7B7C]">
                Free 30-day returns. <span className="underline">Details</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
