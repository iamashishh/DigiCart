import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  asyncAddToCart,
  asyncRemoveFromCart,
  asyncIncreaseQuantity,
  asyncDecreaseQuantity,
} from "../store/actions/CartActions";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigator = useNavigate();

  // Timer State
  const [timeLeft, setTimeLeft] = useState((Math.random()*100).toFixed() * 60 + 33); 

  // Timer Countdown Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format Time (MM:SS)
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  // Dynamic Pricing Calculation
  const totalProductPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discount = Math.floor(totalProductPrice * 0.16); // Example: 16% Discount
  const orderTotal = totalProductPrice - discount;

  return (
    <div className="min-h-screen  mt-[4%]  items-start justify-center flex  bg-gray-100">
      {/* Product Details Section */}
      <div className="w-[60vw] mt-5 mx-auto  h-[50%] bg-white rounded-lg shadow-md p-4">
        <h1 className="text-2xl font-bold text-green-800 mb-4">
          Product Details
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500 text-lg">
              Your cart is empty. Add some products to continue.
            </p>
            <button
              onClick={() => navigator("/")}
              className="mt-4 bg-green-800 text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
            >
              Explore Products
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 border-b border-gray-100 pb-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-md border"
                />

                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-500">
                    ${item.price.toFixed(2)}
                    <span className="line-through text-red-400 ml-2">
                      ${(item.price * 1.16).toFixed(2)}
                    </span>
                  </p>

                  {/* Countdown Timer */}
                  <div className="text-orange-500 text-sm font-medium mt-1">
                    ⏳ {formatTime(timeLeft)}
                  </div>
                  {/* Size & Quantity */}
                  <div className="flex items-center gap-2">
                    <p className="text-gray-500 text-sm">
                      Size: Free Size • Qty:
                    </p>

                    <button
                      onClick={() => dispatch(asyncDecreaseQuantity(item.id))}
                      className=" cursor-pointer px-2 rounded"
                    >
                      -
                    </button>

                    <span className="font-semibold">{item.quantity}</span>

                    <button
                      onClick={() => dispatch(asyncIncreaseQuantity(item.id))}
                      className=" cursor-pointer px-2 rounded"
                    >
                      +
                    </button>
                  </div>

                  
                </div>
                <div className="flex flex-col items-start gap-5">
                <button
                    onClick={() => dispatch(asyncRemoveFromCart(item.id))}
                    className="text-red-500 flex items-center cursor-pointer font-semibold  mt-2"
                  >
                    <i class="ri-close-line text-lg"></i> REMOVE
                  </button>
                <p className="text-green-800 font-semibold">Free Delivery</p>
                </div>
              </div>
            ))}
          </div>
          
        )}
        
      </div>

      {/* Price Details Section */}
      {cartItems.length > 0 && (
        <div className="w-[30vw] h-[50%] mx-auto bg-white rounded-lg shadow-md p-4 mt-4">
          <h1 className="text-2xl font-bold text-green-800 mb-4">
            Price Details ({cartItems.length} Items)
          </h1>

          <div className="flex justify-between">
            <p>Total Product Price</p>
            <p>${totalProductPrice.toFixed(2)}</p>
          </div>

          <div className="flex justify-between text-green-500">
            <p>Total Discounts</p>
            <p>- ${discount}</p>
          </div>

          <div className="flex justify-between font-bold text-xl mt-2">
            <p>Order Total</p>
            <p>${orderTotal.toFixed(2)}</p>
          </div>

          <div className="bg-green-100 text-green-700 px-4 py-2 rounded-md mt-3">
            🎉 Yay! Your total discount is ${discount}
          </div>

          <div className="bg-gray-100 text-gray-500 text-sm px-4 py-2 rounded-md mt-2">
            Clicking on 'Continue' will not deduct any money
          </div>

          <button className="bg-green-800 text-white w-full mt-4 py-3 rounded-md hover:opacity-90 transition">
            Continue
          </button>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-4 mt-4 flex items-center justify-center gap-4">
        <i class=" text-4xl text-green-800 ri-shield-check-line"></i>
        <div>
          <h3 className="text-green-800 font-bold">
            Your Safety, Our Priority
          </h3>
          <p className="text-gray-500 text-sm">
            We make sure that your package is safe at every point of contact.
          </p>
        </div>
      </div>
        </div>
      )}

      
      
    </div>
  );
};

export default Cart;
