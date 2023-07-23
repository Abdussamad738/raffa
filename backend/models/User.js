import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: false,
    unique:false,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  otp: {
    type: String, // or Number, depending on your preference
    default: null,
  },
  role: {
    type: String,
    required: false,
  },
  // deliveryAddress: {
  //   name: { type: String },
  // street: { type: String },
  // city: { type: String },
  // state: { type: String },
  // phoneNo: { type: String },
  // postalCode: { type: String },
  // buildingName: {
  //     type: String,
  //     required: true,
  //   },
  //   suiteNo: {
  //     type: String,
  //     required: true,
  //   },
  //   street: {
  //     type: String,
  //     required: true,
  //   },
  //   emirate: {
  //     type: String,
  //     required: true,
  //   },
  //   postalCode: {
  //     type: String,
  //     required: true,
  //   },
  //   country: {
  //     type: String,
  //     required: true,
  //   },
  //   phoneNo: {
  //     type: String,
  //     required: true,
  //   },
    
  // },
  orderHistory: [
    {
      orderId: {
        type: Schema.Types.ObjectId,
        ref: 'Order', // Reference to the Order model if you have one.
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
      // customerName: {
      //   type: String,
      //   required: true,
      // },
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
          productName:{
            type:String,
            required:false,
          },
          productDescription:{
            type:String,
            required:false,
          },
          image: {
            type: String,
            required: true,
          },
        },
      ],
      status: {
        type: String,
        required: true,
      },
      deliveryAddress: {
        name: {
          type: String,
          required: false,
        },
        buildingName: {
          type: String,
          required: false,
        },
        suiteNo: {
          type: String,
          required: false,
        },
        street: {
          type: String,
          required: false,
        },
        state: {
          type: String,
          required: false,
        },
        postalCode: {
          type: String,
          required: false,
        },
        country: {
          type: String,
          required: false,
        },
        phoneNo: {
          type: String,
          required: false,
        },
      },
      // Add any other order-related fields you want to store.
      // For example: orderDate, totalPrice, etc.
    },
  ],
  cart: [
    {
      productDetails: {
        productId: { type: Schema.Types.ObjectId, ref: 'Product' },
        name: String,
        description: String,
        color: String,
        imageUrl: [String],
        price: Number,
        quantity: Number,
        quantityInStock:Number,
      },
      
    },
  ],
});

const User = model('User', userSchema);

export default User;