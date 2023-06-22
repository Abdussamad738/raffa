import express from "express";
import Category from "../models/Category.js";

const categoryRoutes = express.Router();

categoryRoutes.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    console.log("Fetched categories:", categories);
    res.status(200).json(categories);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default categoryRoutes;