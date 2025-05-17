const orderService = require('../services/order.service');
const ErrorHandler = require("../utils/errorHandler");


module.exports.createOrder = async (req, res, next) => {
  try {

    const userId = req.user._id;
    const value = req.body;
    
    const order = await orderService.createOrder(userId, value);

    return res.status(201).json({
      success: true,
      message: "Order placed successfully",
      data: order
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message
    });
    next(error);
  }
};

module.exports.getUserOrders = async (req, res, next) => {
  try {
    const userId = req.user._id;
    
    const orders = await orderService.getUserOrders(userId);

    return res.status(200).json({
      success: true,
      message: "Orders retrieved successfully",
      data: orders
    });
  } catch (error) {
    next(error)
      return res.status(404).json({
        success: false,
        message: error.message
      });
  }
};

module.exports.getAllOrders = async (req, res, next) => {
  try {
    const status = req.body.role

    if(status !== "admin"){
      return res.status(403).json({
        success: false,
        message: "Access denied. Only admins can view all orders."
      });
    }

    const orders = await orderService.getAllOrders(status);

    return res.status(200).json({
      success: true,
      message: "All orders retrieved successfully",
      count: orders.length,
      data: orders
    });
  } catch (error) {
    next(error);
      return res.status(404).json({
        success: false,
        message: error.message
      });
  }
};