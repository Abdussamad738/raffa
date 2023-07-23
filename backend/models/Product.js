import { Schema, model } from 'mongoose';
import mongoose from "mongoose";
const productSchema = new Schema({
    category: {
        type: [String],
        required: true,
      },
  Name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: [String],
    required:true,
},
  features: {
    type:[String],
    required:false,
  },
  dimensions: {
    type: String,
    required: false,
  },
  specifications: {
    type:String,
    required:false,
  },
  ratings: {
    type:[Number],
    required:true,
  },
  actualPrice: {
    type:Number,
    required:false,
  },
  offerPrice: {
    type:Number,
    required:false,
  },
  sizes: [
    {
      key: {
        type: String,
        required: false,
      },
      value: {
        type: Number,
        required: false,
      },
    }],
  
  quantityInStock: {
    type:Number,
    required:true,
  },
  colour: {
    type:[String],
    required:false,
  },
  deliveryTime: {
    type:Number,
    reuired:true,
  },
  instorePickupTime:{
    type:Number,
    required:true,
  },

  
},{ collection: "products" });

const Product = mongoose.model('Product', productSchema);

export default Product;