const cloudinary = require("cloudinary").v2;
const config = require("../config/env.config");

cloudinary.config({
    cloud_name: config.CLOUDINARY_CLOUND_NAME,
    api_key:config.CLOUDINARY_API_KEY,
    api_secret: config.CLOUDINARY_API_SECRET
})

module.exports = cloudinary