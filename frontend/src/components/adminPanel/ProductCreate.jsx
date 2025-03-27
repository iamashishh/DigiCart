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
    <div className="max-w-lg mx-auto p-6 bg-white mt-22 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Create Product</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
          className="p-2 border rounded-md w-full"
          required
        />
        <textarea
          name="description"
          placeholder="Product Description"
          value={product.description}
          onChange={handleChange}
          className="p-2 border rounded-md w-full"
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
          type="text"
          name="category"
          placeholder="Category"
          value={product.category}
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
          className="p-2 border rounded-md w-full"
          required
        />
        <input
          type="text"
          name="displayImage"
          placeholder="Display Image URL"
          value={product.displayImage}
          onChange={handleChange}
          className="p-2 border rounded-md w-full"
          required
        />
        <button
          type="submit"
          className="bg-green-600 text-white p-2 rounded-md hover:bg-green-700 transition"
        >
          Create Product
        </button>
      </form>
    </div>
  );
}
