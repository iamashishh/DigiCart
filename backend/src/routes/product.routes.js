const {Router} = require('express');

const { createProduct ,getAllProducts} = require('../controllers/product.contoller');
const { isAdmin, isLogin } = require('../middlewares/auth.middleware');
const { productCreateValidator } = require('../middlewares/input-validation');
const { uploadDisplayImage, uploadProductImages, handleMulterErrors } = require('../utils/multer');
const router = Router();

router.post("/create",
    isLogin,
    isAdmin,
    uploadDisplayImage,
    uploadProductImages,
    handleMulterErrors,
    createProduct
)

router.get('/all-products',isLogin,getAllProducts)

module.exports = router;