const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
      maxlength: [100, "Product name cannot exceed 100 characters"],
    },
    description: {
      type: String,
      required: [true, "Product description is required"],
      maxlength: [2000, "Description cannot exceed 2000 characters"],
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
      min: [0, "Price cannot be negative"],
    },
    category: {
      // type: mongoose.Schema.Types.ObjectId,
      // ref: "Category", // Assuming you have a Category model
      type: String,
      required: [true, "Product category is required"],
    },
    stock: {
      type: Number,
      required: [true, "Stock is required"],
      min: [0, "Stock cannot be negative"],
      default: 0,
    },
    images: [
      {
        public_id: {
          type: String,
          required: [true, "Image public_id is required"],
        },
        url: {
          type: String,
          required: [true, "Image URL is required"],
        },
      },
    ],
    ratings: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "user",
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        rating: {
          type: Number,
          required: true,
          min: 1,
          max: 5,
        },
        comment: {
          type: String,
          required: true,
        },
      },
    ],
    totalReviews: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);



const Product = mongoose.model("product", productSchema);

module.exports = Product;

