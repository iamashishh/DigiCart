const cloudinary = require("../utils/cloudinary");
const ErrorHandler = require("../utils/errorHandler");
const productModel = require("../models/product.model");

module.exports.createProduct = async ({files,fields})=>{
    
    const imageFiles = files.images;

    if(!imageFiles || !imageFiles[0]?.filepath){
        throw new ErrorHandler("no image uploaded or invalid file path ");
    }

    const uploadPromises = imageFiles.map((file)=>{
           return  cloudinary.uploader.upload(file.filepath,{
                folder:"products",
                use_filename:true,
                unique_filename:false
            });
    })

    try {
        const uploadResults = await Promise.all(uploadPromises);
        
        

        const imageUrls = uploadResults.map((result) => {
         return   { url:result.secure_url,public_id:result.public_id}
        });

        if (!imageUrls) {
            throw new ErrorHandler("Image upload failed error in cloundinary");
        }


        const product = await productModel.create({
            name: fields.name ? fields.name[0] : "",
            description: fields.description ? fields.description[0] : "",
            price: fields.price ? fields.price[0] : "",
            category: fields.category ? fields.category[0] : "",
            stock: fields.stock ? fields.stock[0] : "",
            images: imageUrls,
        })

        if(!product){
            throw new ErrorHandler("Product creation failed");
        }

        return product;

    } catch (error) {
        console.error(error);
      }


} 