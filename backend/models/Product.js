import { Schema, model } from 'mongoose';
import mongoose from "mongoose";
const productSchema = new Schema({
    category: {
        type: [String],
        required: true
      },
  name: {
    type: String,
    required: true
  },
  image: String,
  description: String,
  features: [String],
  dimensions: {
    width: String,
    height: String,
    depth: String
  },
  specifications: {
    type: Map,
    of: String
  },
  ratings: [Number],
  actual_price: Number,
  offer_price: Number,
  quantity_in_stock: Number,
  colour: String,
  delivery_time: String
},{ collection: "products" });

const Product = mongoose.model('Product', productSchema);

export default Product;