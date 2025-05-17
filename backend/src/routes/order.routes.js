// routes/order.routes.js
const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/', authMiddleware.isLogin, orderController.createOrder);

router.get('/', authMiddleware.isLogin, orderController.getUserOrders);

router.get('/admin', authMiddleware.isLogin, orderController.getAllOrders);

// router.get('/:id', authMiddleware.protect, orderController.getOrderById);
// router.patch('/:id/cancel', authMiddleware.protect, orderController.cancelOrder);

module.exports = router;