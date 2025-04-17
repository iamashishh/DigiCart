const express = require("express");
const router = express.Router();
const {addToCart, getUserCart, updateCartItem} = require("../controllers/cart.controller");
const { isLogin } = require("../middlewares/auth.middleware");

// POST /api/cart
router.post("/", isLogin,addToCart);

router.get("/",isLogin,getUserCart);

router.put("/:id",isLogin,updateCartItem)

module.exports = router;
