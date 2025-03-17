const {Router} = require('express');

const { createProduct ,getAllProducts} = require('../controllers/product.contoller');
const { isAdmin, isLogin } = require('../middlewares/auth.middleware');
const { productCreateValidator } = require('../middlewares/input-validation');
const router = Router();

router.post("/create",
    isLogin,
    isAdmin,
    // productCreateValidator,
    createProduct
)

router.get('/all-products',isLogin,getAllProducts)

module.exports = router;