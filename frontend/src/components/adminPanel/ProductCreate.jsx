import React, { useState } from "react";
import axios from "axios";

export default function CreateProductForm() {
  const [step, setStep] = useState(1);
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    imageUrl: "",
    displayImageUrl: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = async () => {
    try {
      const adminId = localStorage.getItem("adminId");
      const response = await axios.post("/api/products", {
        ...product,
        adminId,
      });
      alert("Product created successfully!");
      setProduct({
        name: "",
        description: "",
        price: "",
        stock: "",
        category: "",
        imageUrl: "",
        displayImageUrl: "",
      });
      setStep(1);
    } catch (error) {
      alert("Failed to create product");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen mt-4  bg-gradient-to-r from-green-50 to-teal-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl  shadow-lg w-full max-w-5xl flex flex-col md:flex-row overflow-hidden">
        {/* Sidebar */}
        <div className="w-full md:w-1/3 bg-green-50 p-6 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Add Product</h2>
          <ul className="space-y-4">
            <li
              onClick={() => setStep(1)}
              className={`cursor-pointer flex items-center space-x-2 ${step === 1 ? 'text-green-600 font-semibold' : 'text-gray-400'}`}
            >
              <span className={`w-6 h-6 flex items-center justify-center rounded-full ${step === 1 ? 'bg-green-600 text-white' : 'border border-gray-300'}`}>1</span>
              <span>Product Details</span>
            </li>
            <li
              onClick={() => setStep(2)}
              className={`cursor-pointer flex items-center space-x-2 ${step === 2 ? 'text-green-600 font-semibold' : 'text-gray-400'}`}
            >
              <span className={`w-6 h-6 flex items-center justify-center rounded-full ${step === 2 ? 'bg-green-600 text-white' : 'border border-gray-300'}`}>2</span>
              <span>Summary</span>
            </li>
          </ul>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-2/3 p-6 bg-zinc-100 space-y-4">
          {step === 1 ? (
            <>
              <div>
                <label className="block text-sm mb-2 font-medium text-gray-700">Product Name</label>
                <input
                  name="name"
                  value={product.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter product name"
                  className=" w-full px-4 py-2 border rounded-md shadow-sm bg-white outline-none border-none "
                />
              </div>

              <div>
                <label className="block text-sm mb-2 font-medium text-gray-700">Product Description</label>
                <textarea
                  name="description"
                  value={product.description}
                  onChange={handleChange}
                  placeholder="Enter product description"
                  className=" w-full bg-white px-4 py-2 border min-h-20 rounded-md resize-none shadow-sm outline-none border-none"
                ></textarea>
              </div>

              <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                <div className="w-full md:w-1/2">
                  <label className="block text-sm mb-2 font-medium text-gray-700">Price</label>
                  <input
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                    type="number"
                    placeholder="Price"
                    className="w-full px-4 py-2 bg-white shadow-sm border-none outline-none rounded-md"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label className="block text-sm mb-2 font-medium text-gray-700">Stock</label>
                  <input
                    name="stock"
                    value={product.stock}
                    onChange={handleChange}
                    type="number"
                    placeholder="Stock Quantity"
                    className="w-full px-4 py-2 bg-white border-none shadow-sm outline-none rounded-md"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-2 font-medium text-gray-700">Category</label>
                  <input
                    name="category"
                    value={product.category}
                    onChange={handleChange}
                    type="text"
                    placeholder="Product category"
                    className="w-full px-4 py-2 bg-white shadow-sm border-none outline-none rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 font-medium  text-gray-700">Image URL</label>
                  <input
                    name="imageUrl"
                    value={product.imageUrl}
                    onChange={handleChange}
                    type="text"
                    placeholder="https://example.com/image.jpg"
                    className="w-full px-4 bg-white py-2 shadow-sm border-none outline-none rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm  mb-2 font-medium text-gray-700">Display Image URL</label>
                  <input
                    name="displayImageUrl"
                    value={product.displayImageUrl}
                    onChange={handleChange}
                    type="text"
                    placeholder="https://example.com/display-image.jpg"
                    className="w-full px-4 py-2 bg-white shadow-sm border-none outline-none rounded-md"
                  />
                </div>
              </div>

              <button
                onClick={handleNext}
                className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 float-right"
              >
                Next
              </button>
            </>
          ) : (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Product Summary</h3>
              <p><strong>Name:</strong> {product.name}</p>
              <p><strong>Description:</strong> {product.description}</p>
              <p><strong>Price:</strong> ${product.price}</p>
              <p><strong>Stock:</strong> {product.stock}</p>
              <p><strong>Category:</strong> {product.category}</p>
              <p><strong>Image URL:</strong> {product.imageUrl}</p>
              <p><strong>Display Image URL:</strong> {product.displayImageUrl}</p>
              <img src={product.displayImageUrl} alt="Product Display" className="w-32 h-32 object-cover rounded" />
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
                <button
                  onClick={handleBack}
                  className="mt-4 bg-gray-300 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-400"
                >
                  Back
                </button>
                <button
                  onClick={handleSubmit}
                  className="mt-4 bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700"
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
