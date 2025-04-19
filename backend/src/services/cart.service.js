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
  
  const cart = await cartModel.findOne({ user: userId });
  if (!cart) {
    throw new ErrorHandler(404, "Cart not found");
  }


  const product = await productModel.findById(productId);
  if (!product) {
    throw new ErrorHandler(404, "Product not found");
  }

  const itemIndex = cart.items.findIndex(
    (item) => item.product.toString() === productId
  );

  if (itemIndex === -1) {
    throw new ErrorHandler(404, "Item not found in cart");
  }

  if (quantity === 0) {
    cart.items.splice(itemIndex, 1);
  } else {
    if (product.stock < quantity) {
      throw new ErrorHandler(400, "Insufficient stock available");
    }

    cart.items[itemIndex].quantity = quantity;
    cart.items[itemIndex].price = product.price; 
  }

  cart.totalPrice = cart.items.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  await cart.save();

  return cartModel.findOne({ user: userId })
    .populate({
      path: 'items.product',
      select: 'name image description price'
    });
};


exports.removeCartItem = async (userId, productId) => {
  if (!userId || !productId) {
    throw new ErrorHandler(400, "User ID and Product ID are required");
  }

  const cart = await cartModel.findOne({ user: userId });
  if (!cart) {
    throw new ErrorHandler(404, "Cart not found");
  }

  const itemIndex = cart.items.findIndex(
    (item) => item.product.toString() === productId
  );

  if (itemIndex === -1) {
    throw new ErrorHandler(404, "Item not found in cart");
  }

  cart.items.splice(itemIndex, 1);

  cart.totalPrice = cart.items.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  await cart.save();

  return cartModel.findOne({ user: userId })
    .populate({
      path: 'items.product',
      select: 'name image description price'
    });
};
