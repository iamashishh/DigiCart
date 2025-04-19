const express = require("express");
const router = express.Router();
const {addToCart, getUserCart, updateCartItem, removeCartItem} = require("../controllers/cart.controller");
const { isLogin } = require("../middlewares/auth.middleware");

// POST /api/cart
router.post("/", isLogin,addToCart);

router.get("/",isLogin,getUserCart);

router.put("/:id",isLogin,updateCartItem)

router.delete("/:id",isLogin,removeCartItem)

module.exports = router;
