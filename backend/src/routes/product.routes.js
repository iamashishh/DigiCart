const { Router } = require("express");
const router = Router();

const {
  createProduct,
  getAllProducts,
  getProductById,
  deleteProduct,
  updateProduct,
} = require("../controllers/product.contoller");

const { isAdmin, isLogin } = require("../middlewares/auth.middleware");
const { productCreateValidator } = require("../middlewares/input-validation");
const { handleMulterErrors, uploadFields } = require("../utils/multer");

router.post(
  "/create",
  isLogin,
  isAdmin,
  uploadFields,
  handleMulterErrors,
  createProduct
);

router.get("/all-products", getAllProducts);

router.get("/:id", getProductById);

router.delete("/:id", isAdmin, isLogin, deleteProduct);

router.put(
  "/:id",
  isLogin,
  isAdmin,
  uploadFields,
  handleMulterErrors,
  updateProduct
);

module.exports = router;
