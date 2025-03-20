const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary.config");

const ALLOWED_FORMATS = ["jpeg", "png", "jpg"];

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {

    return {
      folder: "products",
      format: file.mimetype.split("/")[1],   
      transformation: [{ width: 800,  crop: "scale" }],
    };
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    if (!ALLOWED_FORMATS.includes(ext)) {
      return cb(new Error("Invalid file format. Allowed: jpeg, png, jpg"));
    }
    cb(null, true);
  },
});

const handleMulterErrors = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    let message = "Something went wrong while uploading";
    if (err.code === "LIMIT_FILE_SIZE") message = "File size exceeds 5MB limit";
    if (err.code === "LIMIT_UNEXPECTED_FILE") message = "Invalid file format or unexpected field";
    return res.status(400).json({ error: message });
  }

  if (err) {
    return res.status(400).json({ error: err.message });
  }

  next();
};

const uploadFields = upload.fields([
  { name: "displayImage", maxCount: 1 },
  { name: "images", maxCount: 4 },
]);

module.exports = {
 uploadFields,
  handleMulterErrors, 
};
