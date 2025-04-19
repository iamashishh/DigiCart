// models/order.model.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderItemSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: [true, 'Product reference is required']
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
    min: [1, 'Quantity must be at least 1']
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price cannot be negative']
  }
}, { _id: false });

const ShippingAddressSchema = new Schema({
  fullName: {
    type: String,
    required: [true, 'Full name is required']
  },
  addressLine1: {
    type: String,
    required: [true, 'Address line 1 is required']
  },
  addressLine2: {
    type: String
  },
  city: {
    type: String,
    required: [true, 'City is required']
  },
  state: {
    type: String,
    required: [true, 'State is required']
  },
  postalCode: {
    type: String,
    required: [true, 'Postal code is required']
  },
  country: {
    type: String,
    required: [true, 'Country is required']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required']
  }
}, { _id: false });

const PaymentInfoSchema = new Schema({
  method: {
    type: String,
    required: [true, 'Payment method is required'],
    enum: ['credit_card', 'debit_card', 'paypal', 'stripe', 'cash_on_delivery']
  },
  transactionId: {
    type: String
  },
  status: {
    type: String,
    required: [true, 'Payment status is required'],
    enum: ['pending', 'completed', 'failed', 'refunded'],
    default: 'pending'
  },
  paidAt: {
    type: Date
  }
}, { _id: false });

const OrderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User reference is required']
  },
  items: {
    type: [OrderItemSchema],
    required: [true, 'Order items are required'],
    validate: {
      validator: function(items) {
        return items.length > 0;
      },
      message: 'At least one item is required'
    }
  },
  shippingAddress: {
    type: ShippingAddressSchema,
    required: [true, 'Shipping address is required']
  },
  subtotal: {
    type: Number,
    required: [true, 'Subtotal is required'],
    min: [0, 'Subtotal cannot be negative']
  },
  tax: {
    type: Number,
    required: [true, 'Tax is required'],
    min: [0, 'Tax cannot be negative']
  },
  shippingCost: {
    type: Number,
    required: [true, 'Shipping cost is required'],
    min: [0, 'Shipping cost cannot be negative']
  },
  totalAmount: {
    type: Number,
    required: [true, 'Total amount is required'],
    min: [0, 'Total amount cannot be negative']
  },
  paymentInfo: {
    type: PaymentInfoSchema,
    required: [true, 'Payment information is required']
  },
  status: {
    type: String,
    required: [true, 'Order status is required'],
    enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
    default: 'pending'
  },
  notes: {
    type: String
  },
  trackingNumber: {
    type: String
  },
  estimatedDelivery: {
    type: Date
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});


OrderSchema.index({ user: 1, createdAt: -1 });
OrderSchema.index({ status: 1 });
OrderSchema.index({ 'paymentInfo.status': 1 });

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;