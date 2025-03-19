const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary.config");

const ALLOWED_FORMATS = ["jpeg", "png", "jpg"];

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    const ext = file.mimetype.split("/")[1]; 
    if (!ALLOWED_FORMATS.includes(ext)) 
    {throw new Error("Invalid file format. Allowed: jpeg, png, jpg");

    }
    return {
      folder: "products",
      format: ext, 
    };
  },
});

const upload = multer({
  storage
 
});

const handleMulterErrors = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({ error: "File size exceeds 5MB limit" });
    }
    if (err.code === "LIMIT_UNEXPECTED_FILE") {
      return res.status(400).json({ error: "Unexpected file field. Please check your form field names." });
    }
    return res.status(500).json({ error: "Something went wrong while uploading" });
  }

  if (err) {
    return res.status(400).json({ error: err.message });
  }

  next();
};

module.exports = {
  uploadDisplayImage: upload.single("displayImage"),
  uploadProductImages: upload.array("images", 2),
  handleMulterErrors, 
};
