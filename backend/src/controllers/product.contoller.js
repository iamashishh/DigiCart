const productModel = require("../models/product.model");
const { createProductService } = require("../services/product.service");
const ErrorHandler = require("../utils/errorHandler");

module.exports.createProduct = async (req, res, next) => {
  try {

   const { name, description, price, category, stock } = req.body;
    if (!name || !description || !price || !category || !stock) {

      return next(new ErrorHandler("All fields (name, description, price, category, stock) are required.", 400));
    }

    const displayImage = req.files.displayImage
      ? {
          url: req.files.displayImage[0].path,
          public_id: req.files.displayImage[0].filename,
        }
      : null;

    const images = req.files.images
      ? req.files.images.map((file) => ({
          url: file.path,
          public_id: file.filename,
        }))
      : [];

    if (!displayImage) {
      return next(new ErrorHandler("Display Image is required",400) );
    }

    
    // Create product object
    const productData = {
      name,
      description,
      price,
      category,
      stock,
      displayImage,
      images,
    };

    const newProduct = await createProductService(productData);

    // Respond with success
    return res.status(201).json({
      success: true,
      message: "Product created successfully.",
      product: newProduct,
    });
  } catch (error) {
    // Log the error for debugging
    console.error("Error in createProduct:", error);

    // Handle specific errors
    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: "Validation error.",
        error: error.message,
      });
    }

   next(new ErrorHandler(" an unexpected error in creating product",500))
  }
};

module.exports.getAllProducts = async (req, res) => {

   try {
    const allProducts = await productModel.find().select("-images");



   return res.status(200).json({
        success: true,
        message: "All products",
        allProducts,
        
      });
   } catch (error) {

    console.log(error);
    next(error);

   }


}

