import { Schema, model } from 'mongoose';

const orderSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  transactionDate: {
    type: Date,
    required: true,
  },
  deliveryDate: {
    type: Date,
    required: true,
  },
  shippingMethod: {
    type: String,
    required: true,
  },
  productRating: {
    type: Number,
    required: true,
  },
  shippingRating: {
    type: Number,
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  orderNumber: {
    type: String,
    required: true,
  },
  products: [
    {
      _id: false,
      productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  status: {
    type: String,
    required: true,
  },
  deliveryAddress: {
    buildingName: {
      type: String,
      required: true,
    },
    suiteNo: {
      type: String,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    emirate: {
      type: String,
      required: true,
    },
    postalCode: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: String,
      required: true,
    },
  },
});

const Order = model('Order', orderSchema);

export default Order;