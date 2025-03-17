const {Router} = require('express');

const { createProduct } = require('../controllers/product.contoller');
const { isAdmin, isLogin } = require('../middlewares/auth.middleware');
const { productCreateValidator } = require('../middlewares/input-validation');
const router = Router();

router.post("/create",
    isLogin,
    isAdmin,
    // productCreateValidator,
    createProduct
)


module.exports = router;