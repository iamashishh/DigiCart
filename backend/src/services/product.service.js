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