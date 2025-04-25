import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  const orders = [
    { id: "ORD12345", total: 49.99, status: "Shipped", image: "/images/order1.jpg" },
    { id: "ORD67890", total: 29.99, status: "Processing", image: "/images/order2.jpg" },
    { id: "ORD11223", total: 99.99, status: "Delivered", image: "/images/order3.jpg" }
  ];

  return (
    <div className="mt-34 sm:p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-green-800">Your Orders</h2>
      {orders.length === 0 ? (
        <p className="text-gray-500 text-center">No orders found.</p>
      ) : (
        <ul className="space-y-4">
          {orders.map((order, index) => (
            <li
              key={index}
              className="flex items-center justify-between gap-4 flex-wrap border-b p-4 rounded-lg shadow-md"
            >
              <img
                src={order.image}
                alt={order.id}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-md border object-cover"
              />
              <div className="flex-1  min-w-0">
                <p className="font-semibold text-base sm:text-lg text-gray-800 truncate">
                  Order #{order.id}
                </p>
                <p className="text-gray-600 text-sm sm:text-base">
                  Total: <span className="text-green-700 font-bold">${order.total.toFixed(2)}</span>
                </p>
                <p className="text-gray-500 text-sm">Status: {order.status}</p>
              </div>
              <Link className="bg-green-800 text-white max-sm:hidden lg:block max-md:block px-3 py-2 rounded-md text-sm sm:text-base whitespace-nowrap">
                View Details 
              </Link>
              <Link className="bg-g max-sm:block max-md:hidden lg:hidden text-white px-3 py-2 rounded-md text-sm sm:text-base whitespace-nowrap">
              <i className="ri-arrow-right-wide-line text-black"></i>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Orders;
