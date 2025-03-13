import React, { useState } from 'react';


const Productdeatils = () => {
        const [quantity, setQuantity] = useState(1);
      
        const increaseQuantity = () => setQuantity(quantity + 1);
        const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);
      
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="bg-white p-10 rounded-2xl shadow-md w-[100%] max-w-5xl">
        <div className="flex gap-10">
          {/* Image Section */}
          <div className="flex-1">
            <img
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
              alt="Airpods Max"
              className="w-full rounded-lg"
            />
            <div className="flex gap-3 mt-4">
              {/* Thumbnail Images */}
              {['green', 'black', 'blue', 'silver', 'pink'].map((color) => (
                <div
                  key={color}
                  className="w-16 h-16 bg-gray-200 rounded-md cursor-pointer"
                />
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold">Airpods - Max</h1>
            <p className="text-gray-500 mt-2">
              A perfect balance of exhilarating high-fidelity audio and the
              effortless magic of AirPods.
            </p>
            <div className="flex items-center mt-3">
              <span className="text-green-500">★★★★★</span>
              <span className="text-gray-400 ml-2">(121)</span>
            </div>
            <div className="text-xl font-semibold mt-4">$549.00 or 99.99/month</div>
            <p className="text-gray-400 text-sm">
              Suggested payments with 6 months special financing
            </p>

            {/* Color Options */}
            <div className="mt-5">
              <h3 className="font-semibold mb-2">Choose a Color</h3>
              <div className="flex gap-2">
                {['red', 'black', 'green', 'blue', 'silver'].map((color) => (
                  <div
                    key={color}
                    className={`w-8 h-8 rounded-full border cursor-pointer bg-${color}-500`}
                  />
                ))}
              </div>
            </div>

            {/* Quantity Section */}
            <div className="mt-5 flex items-center gap-4">
              <button
                className="bg-gray-200 w-8 h-8 rounded-md"
                onClick={decreaseQuantity}
              >
                -
              </button>
              <span className="text-lg">{quantity}</span>
              <button
                className="bg-gray-200 w-8 h-8 rounded-md"
                onClick={increaseQuantity}
              >
                +
              </button>
              <span className="text-orange-500 ml-2">Only 12 Items Left!</span>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-5">
              <button className="bg-green-700 text-white py-2 px-6 rounded-lg">
                Buy Now
              </button>
              <button className="border-2 border-green-700 py-2 px-6 rounded-lg">
                Add to Cart
              </button>
            </div>

            {/* Delivery Info */}
            <div className="mt-5 border-t pt-3">
              <p className="text-sm text-gray-500">
                🚚 Free Delivery - Enter your postal code for availability
              </p>
              <p className="text-sm text-gray-500 mt-2">
                🔄 Return Delivery - Free 30-day returns. Details
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Productdeatils