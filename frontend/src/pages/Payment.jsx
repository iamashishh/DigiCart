import React, { useState } from "react";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");

  const handlePayment = (e) => {
    e.preventDefault();
    alert(`Payment Successful using ${paymentMethod.toUpperCase()}!`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
        {/* Header */}
        <h2 className="text-2xl font-semibold mb-6 text-center">Checkout</h2>

        {/* Order Summary */}
        <div className="border-b pb-4 mb-4">
          <h3 className="text-lg font-semibold">Order Summary</h3>
          <div className="flex justify-between mt-2">
            <span>Product 1</span>
            <span>$499</span>
          </div>
          <div className="flex justify-between">
            <span>Product 2</span>
            <span>$199</span>
          </div>
          <div className="flex justify-between font-bold mt-2">
            <span>Total</span>
            <span>$698</span>
          </div>
        </div>

        {/* Payment Options */}
        <form onSubmit={handlePayment}>
          <h3 className="text-lg font-semibold mb-2">Select Payment Method</h3>

          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="payment"
                value="card"
                checked={paymentMethod === "card"}
                onChange={() => setPaymentMethod("card")}
                className="accent-blue-500"
              />
              <span>Credit / Debit Card</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="payment"
                value="upi"
                checked={paymentMethod === "upi"}
                onChange={() => setPaymentMethod("upi")}
                className="accent-green-500"
              />
              <span>UPI / Google Pay / PhonePe</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={paymentMethod === "cod"}
                onChange={() => setPaymentMethod("cod")}
                className="accent-red-500"
              />
              <span>Cash on Delivery</span>
            </label>
          </div>

          {/* Card Payment Fields */}
          {paymentMethod === "card" && (
            <div className="mt-4 space-y-2">
              <input
                type="text"
                placeholder="Cardholder Name"
                className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
                required
              />
              <input
                type="text"
                placeholder="Card Number"
                className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
                required
              />
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-1/2 p-2 border rounded-md focus:ring focus:ring-blue-300"
                  required
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="w-1/2 p-2 border rounded-md focus:ring focus:ring-blue-300"
                  required
                />
              </div>
            </div>
          )}

          {/* UPI Payment Field */}
          {paymentMethod === "upi" && (
            <div className="mt-4">
              <input
                type="text"
                placeholder="Enter UPI ID (e.g. abc@upi)"
                className="w-full p-2 border rounded-md focus:ring focus:ring-green-300"
                required
              />
            </div>
          )}

          {/* Payment Button */}
          <button
            type="submit"
            className="mt-6 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
