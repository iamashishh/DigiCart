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
    next(error);
      return res.status(404).json({
        success: false,
        message: error.message
      });
  }
};