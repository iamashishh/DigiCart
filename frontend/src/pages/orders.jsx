import React from "react";
import { Link} from "react-router-dom";

const orders = () => {
  const orders = [
    { id: "ORD12345", total: 49.99, status: "Shipped", image: "/images/order1.jpg" },
    { id: "ORD67890", total: 29.99, status: "Processing", image: "/images/order2.jpg" },
    { id: "ORD11223", total: 99.99, status: "Delivered", image: "/images/order3.jpg" }
  ];

  return  (
      <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-green-800">Your Orders</h2>
        {orders.length === 0 ? (
          <p className="text-gray-500 text-center">No orders found.</p>
        ) : (
          <ul className="space-y-4">
            {orders.map((order, index) => (
              <li key={index} className="flex items-center border-b p-4 rounded-lg shadow-md">
                <img src={order.image} alt={order.id} className="w-20 h-20 rounded-md border" />
                <div className="ml-4 flex-1">
                  <p className="font-semibold text-lg text-gray-800">Order #{order.id}</p>
                  <p className="text-gray-600">Total: <span className="text-green-700 font-bold">${order.total.toFixed(2)}</span></p>
                  <p className="text-gray-500">Status: {order.status}</p>
                </div>
                <Link className="bg-green-800 text-white px-4 py-2 rounded-lg">View Details</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

export default orders;