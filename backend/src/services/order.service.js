const Order = require('../models/order.model');
const Cart = require('../models/cart.model');
const Product = require('../models/product.model');
const handleError = require("../utils/errorHandler")

module.exports.createOrder = async (userId, orderData) => {

  const cart = await Cart.findOne({ user: userId }).populate('items.product');
  if (!cart || cart.items.length === 0) {
    throw new handleError(400, "Cart is empty. Please add items to cart before placing an order");
  }

  // 2. Verify all products still exist and have sufficient stock
  for (const item of cart.items) {
    const product = await Product.findById(item.product._id);
    if (!product) {
      throw new handleError(404, `Product '${item.product.name}' no longer exists`);
    }
    if (product.stock < item.quantity) {
      throw new handleError(400, `Insufficient stock for '${product.name}'. Available: ${product.stock}`);
    }
  }

  // 3. Calculate order financials
  const subtotal = cart.totalPrice;
  const tax = parseFloat((subtotal * 0.1).toFixed(2)); // 10% tax rate as example
  const shippingCost = orderData.shippingMethod === 'express' ? 15 : 5; // Example shipping costs
  const totalAmount = parseFloat((subtotal + tax + shippingCost).toFixed(2));

  // 4. Create order object
  const order = new Order({
    user: userId,
    items: cart.items.map(item => ({
      product: item.product._id,
      quantity: item.quantity,
      price: item.price
    })),
    shippingAddress: orderData.shippingAddress,
    subtotal,
    tax,
    shippingCost,
    totalAmount,
    paymentInfo: {
      method: orderData.paymentMethod,
      status: orderData.paymentMethod === 'cash_on_delivery' ? 'pending' : 'completed',
      paidAt: orderData.paymentMethod === 'cash_on_delivery' ? null : new Date()
    },
    status: 'processing',
    notes: orderData.notes || '',
    estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days from now
  });

  // 5. Save the order
  const savedOrder = await order.save();

  // 6. Update product inventory
  for (const item of cart.items) {
    await Product.findByIdAndUpdate(
      item.product._id, 
      { $inc: { stock: -item.quantity } }
    );
  }

  // 7. Clear the user's cart
  await Cart.findOneAndUpdate(
    { user: userId },
    { $set: { items: [], totalPrice: 0 } }
  );

  // 8. Return the created order with populated product details
  return Order.findById(savedOrder._id).populate('items.product');
};

exports.getUserOrders = async (userId) => {

  const query = { user: userId };
  
 
  
  const orders = await Order.find(query)
    .sort({ createdAt: -1 }) // Newest first
    .populate({
      path: 'items.product',
      select: 'name image price'
    });
  
  return orders;
};



exports.getAllOrders = async () => {
 
  const orders = await Order.find()
    .sort({ createdAt: -1 }) 
    .populate({
      path: 'items.product',
      select: 'name image price'
    })
    .populate({
      path: 'user',
      select: 'name email'
    });
  
  return orders;
};