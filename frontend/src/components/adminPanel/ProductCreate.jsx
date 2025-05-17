import React, { useState } from "react";
import axios from "axios";
import Axios from "../../utils/axios";

export default function CreateProductForm() {
  const [step, setStep] = useState(1);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl1, setImageUrl1] = useState("");
  const [imageUrl2, setImageUrl2] = useState("")
  const [displayImageUrl, setDisplayImageUrl] = useState("");

  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = async () => {
    console.log("2");
    
    try {
      const formData = new FormData();
  
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("stock", stock);
      formData.append("category", category);
  
      if (displayImageUrl) formData.append("displayImage", displayImageUrl);
      if (imageUrl1) formData.append("images", imageUrl1);
      if (imageUrl2) formData.append("images", imageUrl2);
  
      const response = await Axios.post("/products/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      });
  
      if (response.status === 201) {
        console.log("Product created successfully:", response.data);
        alert("Product created successfully!");
        setStep(1);
      }
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
              className={`cursor-pointer flex items-center space-x-2 ${
                step === 1 ? "text-green-600 font-semibold" : "text-gray-400"
              }`}
            >
              <span
                className={`w-6 h-6 flex items-center justify-center rounded-full ${
                  step === 1
                    ? "bg-green-600 text-white"
                    : "border border-gray-300"
                }`}
              >
                1
              </span>
              <span>Product Details</span>
            </li>
            <li
              onClick={() => setStep(2)}
              className={`cursor-pointer flex items-center space-x-2 ${
                step === 2 ? "text-green-600 font-semibold" : "text-gray-400"
              }`}
            >
              <span
                className={`w-6 h-6 flex items-center justify-center rounded-full ${
                  step === 2
                    ? "bg-green-600 text-white"
                    : "border border-gray-300"
                }`}
              >
                2
              </span>
              <span>Summary</span>
            </li>
          </ul>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-2/3 p-6 bg-zinc-100 space-y-4">
              <div>
                <label className="block text-sm mb-2 font-medium text-gray-700">
                  Product Name
                </label>
                <input
                  name="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  type="text"
                  placeholder="Enter product name"
                  className=" w-full px-4 py-2 border rounded-md shadow-sm bg-white outline-none border-none "
                />
              </div>

              <div>
                <label className="block text-sm mb-2 font-medium text-gray-700">
                  Product Description
                </label>
                <textarea
                  name="description"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  placeholder="Enter product description"
                  className=" w-full bg-white px-4 py-2 border min-h-20 rounded-md resize-none shadow-sm outline-none border-none"
                ></textarea>
              </div>

              <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                <div className="w-full md:w-1/2">
                  <label className="block text-sm mb-2 font-medium text-gray-700">
                    Price
                  </label>
                  <input
                    name="price"
                    value={price}
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                    type="number"
                    placeholder="Price"
                    className="w-full px-4 py-2 bg-white shadow-sm border-none outline-none rounded-md"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label className="block text-sm mb-2 font-medium text-gray-700">
                    Stock
                  </label>
                  <input
                    name="stock"
                    value={stock}
                    onChange={(e) => {
                      setStock(e.target.value);
                    }}
                    type="number"
                    placeholder="Stock Quantity"
                    className="w-full px-4 py-2 bg-white border-none shadow-sm outline-none rounded-md"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-2 font-medium text-gray-700">
                    Category
                  </label>
                  <input
                    name="category"
                    value={category}
                    onChange={(e) => {
                      setCategory(e.target.value);
                    }}
                    type="text"
                    placeholder="Product category"
                    className="w-full px-4 py-2 bg-white shadow-sm border-none outline-none rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm  mb-2 font-medium text-gray-700">
                    Display Image File
                  </label>

                  <input
                    name="displayImage"
                    type="file"
                    accept="image/*"
                    onChange={(e)=>{setDisplayImageUrl(e.target.files[0])}}
                    className="w-full px-4 py-2 bg-white shadow-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#046664]"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 font-medium  text-gray-700">
                    Image 1
                  </label>
                  <input
                    name="displayImage"
                    type="file"
                    accept="image/*"
                    onChange={(e)=>{setImageUrl1(e.target.files[0])}}
                    className="w-full px-4 py-2 bg-white shadow-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#046664]"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 font-medium  text-gray-700">
                    Image 2
                  </label>
                  <input
                    name="imageUrl"
                    type="file"
                    accept="image/*"
                    onChange={(e)=>{setImageUrl2(e.target.files[0])}}
                    className="w-full px-4 py-2 bg-white shadow-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#046664]"
                  />
                </div>
              </div>

             <button onClick={handleSubmit} className="px-4 py-2 rounded-md text-md border" >submit </button>
        </div>
      </div>
    </div>
  );
}
