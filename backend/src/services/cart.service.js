const cartModel = require('../models/cart.model');
const ErrorHandler = require('../utils/errorHandler');
const productModel = require("../models/product.model")

module.exports.getCartByUserId = async (userId) => {
  if (!userId) {
    throw new ErrorHandler(400, 'User ID is required');
  }
  
  const cart = await cartModel.findOne({ user: userId })
    .populate({
      path: 'items.product',
      select: 'name image price description'
    });
    
  if (!cart) {
    return {
      items: [],
      totalPrice: 0
    };
  }
  
  return {
    _id: cart._id,
    items: cart.items.map(item => ({
      product: item.product,
      quantity: item.quantity,
      price: item.price,
      subtotal: item.quantity * item.price
    })),
    totalPrice: cart.totalPrice
  };
};

exports.updateCartItem = async (userId, productId, quantity) => {
  // Find user's cart
  const cart = await cartModel.findOne({ user: userId });
  if (!cart) {
    throw new ErrorHandler(404, "Cart not found");
  }

  // Check if product exists
  const product = await productModel.findById(productId);
  if (!product) {
    throw new ErrorHandler(404, "Product not found");
  }

  // Find item index in cart
  const itemIndex = cart.items.findIndex(
    (item) => item.product.toString() === productId
  );

  // If item not found in cart
  if (itemIndex === -1) {
    throw new ErrorHandler(404, "Item not found in cart");
  }

  if (quantity === 0) {
    // Remove item if quantity is zero
    cart.items.splice(itemIndex, 1);
  } else {
    // Check if requested quantity is available in stock
    if (product.stock < quantity) {
      throw new ErrorHandler(400, "Insufficient stock available");
    }

    // Update item quantity
    cart.items[itemIndex].quantity = quantity;
    cart.items[itemIndex].price = product.price; // Ensure price is current
  }

  // Recalculate total price
  cart.totalPrice = cart.items.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  // Save updated cart
  await cart.save();

  // Return updated cart with populated product details
  return cartModel.findOne({ user: userId })
    .populate({
      path: 'items.product',
      select: 'name image description price'
    });
};
