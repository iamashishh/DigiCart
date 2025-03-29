import { useState } from "react";

export default function CreateProduct() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
    images: "",
    displayImage: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Created:", product);
    // API call to save product
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-white shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Product Management</h2>
        <ul className="space-y-3">
          <li className="text-gray-700 font-medium">Dashboard</li>
          <li className="text-blue-600 font-medium">Create Product</li>
          <li className="text-gray-700 font-medium">Product List</li>
          <li className="text-red-600 font-medium">Logout</li>
        </ul>
      </div>
      
      {/* Main Content */}
      <div className="w-3/4 p-6">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Create Product</h2>
        <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-lg grid grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={product.name}
            onChange={handleChange}
            className="p-2 border rounded-md w-full"
            required
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={product.category}
            onChange={handleChange}
            className="p-2 border rounded-md w-full"
            required
          />
          <textarea
            name="description"
            placeholder="Product Description"
            value={product.description}
            onChange={handleChange}
            className="p-2 border rounded-md w-full col-span-2"
            required
          ></textarea>
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={product.price}
            onChange={handleChange}
            className="p-2 border rounded-md w-full"
            required
          />
          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={product.stock}
            onChange={handleChange}
            className="p-2 border rounded-md w-full"
            required
          />
          <input
            type="text"
            name="images"
            placeholder="Image URLs (comma-separated)"
            value={product.images}
            onChange={handleChange}
            className="p-2 border rounded-md w-full col-span-2"
            required
          />
          <input
            type="text"
            name="displayImage"
            placeholder="Display Image URL"
            value={product.displayImage}
            onChange={handleChange}
            className="p-2 border rounded-md w-full col-span-2"
            required
          />
          <div className="col-span-2 flex gap-4">
            <button
              type="submit"
              className="bg-green-600 text-white p-2 rounded-md hover:bg-green-700 transition"
            >
              Create Product
            </button>
            <button
              type="button"
              className="bg-gray-400 text-white p-2 rounded-md hover:bg-gray-500 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
