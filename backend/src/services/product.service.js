const ErrorHandler = require("../utils/errorHandler");
const productModel = require("../models/product.model");

module.exports.createProductService =  async (productData)=>{

    const {name,description,category,price,stock} = productData;

    if(!name || !description || !category || !price || !stock){
        throw new ErrorHandler("All fields (name, description, price, category, stock) are required.", 400);
    }

    try {
        const product = await productModel.create({
            name,
            description,
            category,
            price,
            stock,
            displayImage: productData.displayImage,
            images: productData.images
        })
        
        if(!product){
            return next(new ErrorHandler("error in creating product", 400))
        }

        return product;
    } catch (error) {
        next(error);
        console.log(error);
        
        
    }

}

module.exports.updateProductService = async ({ id, name, description, price, images, displayImage, stock, category }) => {
  if (!id) {
    throw new ErrorHandler("Product ID is required.", 400);
  }

  const updatedData = {
    ...(name && { name }),
    ...(description && { description }),
    ...(price && { price }),
    ...(category && { category }),
    ...(stock && { stock }),
    ...(displayImage && { displayImage }),
    ...(images && { images }),
  };

  try {
    const updatedProduct = await productModel.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!updatedProduct) {
      throw new ErrorHandler("Product not found. Please check the ID and try again.", 404);
    }

    return updatedProduct;
  } catch (error) {
    console.error("Error in updateProductService:", error);
    throw new ErrorHandler("An unexpected error occurred while updating the product.", 500);
  }
};