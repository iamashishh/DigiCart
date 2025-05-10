const productModel = require("../models/product.model");
const { createProductService, updateProductService } = require("../services/product.service");
const ErrorHandler = require("../utils/errorHandler");

module.exports.createProduct = async (req, res, next) => {
  try {

   const { name, description, price, category, stock } = req.body;
    // console.log("req.files", req.files);
   
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

module.exports.getAllProducts = async (req, res,next) => {

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

module.exports.getProductById = async (req,res,next)=>{

try {

  const {id} = req.params;

  if(!id){
    return next(new ErrorHandler("id is required",400));
  }

  const product =await productModel.findById(id);

  if(!product){
   return  next( new ErrorHandler("product not found",404));
  }

  return res.status(200).json({
    success:true,
    message:"product retreive successsfully",
    product
  })
  
} catch (error) {
  console.log("error in fetching product", error);
  return next(error);
  
}

  
  
  

}

module.exports.deleteProduct = async (req,res,next)=>{
  const id = req.params

  if(!id){
    return res.status(400).json({
      message:"Id must be nesseccary for delete"
    })
  }

  try {
    const product = await productModel.findByIdAndDelete(id);
    
    if(!product){
      return next(new ErrorHandler("product not found . please check your id and try again",404));
    }

    return res.json({message:"product delete successfully"});
  } catch (error) {
    console.log(err.message);
    next(error);
    
  }

}

module.exports.updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, description, price, category, stock } = req.body;

    if (!id) {
      return next(new ErrorHandler("Product ID is required.", 400));
    }

    const displayImage = req.files?.displayImage
      ? {
          url: req.files.displayImage[0].path,
          public_id: req.files.displayImage[0].filename,
        }
      : undefined;

    const images = req.files?.images
      ? req.files.images.map((file) => ({
          url: file.path,
          public_id: file.filename,
        }))
      : undefined;

  

    const product = await  updateProductService({id,name,price,category,description,stock,displayImage,images});

    return res.status(200).json({
      success: true,
      message: "Product updated successfully.",
      product: product,
    });
  } catch (error) {
    console.error("Error in updateProduct:", error);
    return next(new ErrorHandler("An unexpected error occurred while updating the product.", 500));
  }
};