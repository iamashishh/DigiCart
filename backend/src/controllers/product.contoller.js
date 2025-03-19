const productModel = require("../models/product.model")
const { createProduct } = require('../services/product.service');

module.exports.createProduct = async (req, res,next) => {
   try {

    // const images = req.files.map((file)=>{
    //     return {url:file.path,public_id:file.filename}
    // })
    console.log(req.file);
    
    const displayImage = {
        url:req.file.path,
        public_id:req.file.filename}

    
        console.log(displayImage);
        
        return true;
        

   } catch (error) {
         console.log(error);
         next(error);

    
   }
}

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

