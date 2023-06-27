import { Schema, model } from 'mongoose';
import mongoose from "mongoose";
const productSchema = new Schema({
    category: {
        type: [String],
        required: true
      },
  Name: {
    type: String,
    required: true
  },
  Image: {
    type: [String],
},
  Description: String,
  Features: [String],
  Dimensions: {
    width: String,
    height: String,
    depth: String
  },
  Specifications: {
    type: Map,
    of: String
  },
  Ratings: [Number],
  Actual_Price: Number,
  Offer_Price: Number,
  Quantity_in_Stock: Number,
  Colour: String,
  Delivery_Time: String
},{ collection: "products" });

const Product = mongoose.model('Product', productSchema);

export default Product;