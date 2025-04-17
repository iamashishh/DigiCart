const cartModel = require("../models/cart.model");
const productModel = require("../models/product.model");
const cartService = require("../services/cart.service")

module.exports.addToCart = async (req, res) => {
  try {
    const userId = req.user._id;
    const { product, quantity, price } = req.body;

    // Basic validation
    if (!userId || !product || !quantity || !price) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Validate positive quantity
    if (quantity <= 0) {
      return res.status(400).json({ message: "Quantity must be positive" });
    }

    // Verify product exists
    const productExists = await productModel.findById(product);
    if (!productExists) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Check if product is in stock
    if (productExists.stock < quantity) {
      return res.status(400).json({ message: "Insufficient stock available" });
    }

    let cart = await cartModel.findOne({ user: userId });

    if (!cart) {
      // Create new cart
      cart = await cartModel.create({
        user: userId,
        items: [{ product, quantity, price }],
        totalPrice: quantity * price,
      });
    } else {
      // Update existing cart
      const itemIndex = cart.items.findIndex(
        (item) => item.product.toString() === product
      );

      if (itemIndex > -1) {
        // Check if total requested quantity is available
        const newQuantity = cart.items[itemIndex].quantity + quantity;
        if (productExists.stock < newQuantity) {
          return res.status(400).json({ message: "Insufficient stock available" });
        }
        
        // Update existing item
        cart.items[itemIndex].quantity = newQuantity;
        cart.items[itemIndex].price = price;
      } else {
        // Add new item
        cart.items.push({ product, quantity, price });
      }

      // Recalculate total price
      cart.totalPrice = cart.items.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
      );
      
      await cart.save();
    }

    res.status(200).json({ 
      message: "Item added to cart", 
      cart 
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports.getUserCart = async (req, res, next) => {
  try {
    const userId = req.user._id;
    
    const cart = await cartService.getCartByUserId(userId);
    
    return res.status(200).json({
      success: true,
      data: cart
    });
  } catch (error) {
    next(error);
      return res.status(error.statusCode).json({
        success: false,
        message: error.message
      });
  }
};

module.exports.updateCartItem = async (req, res, next) => {
  try {

    const userId = req.user._id;
    const { productId, quantity } = value;

    const updatedCart = await cartService.updateCartItem(userId, productId, quantity);

    return res.status(200).json({
      success: true,
      message: "Cart updated successfully",
      data: updatedCart
    });
  } catch (error) {
    next(error);
      return res.status(error.statusCode).json({
        success: false,
        message: error.message
      }); 
  }
};

