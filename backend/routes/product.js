import { Router } from 'express';
const router = Router();
import Product from '../models/Product.js';
import { authMiddleware, isAdmin } from '../middleware/auth.js';


// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific product by ID
router.get('/:id', async (req, res) => {
    try {
      const product = await Product.findOne({ _id: req.params.id });
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

router.get('/:category', async (req, res) => {
    const { category } = req.params;
  
    try {
      // Query the database to fetch products for the specified category
      const products = await Product.find({ category });
  
      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch products' });
    }
  });

// Create a new product
router.post('/', async (req, res) => {
  const product = new Product(req.body);
  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a product
router.patch('/:id', getProduct, async (req, res) => {
  if (req.body.category != null) {
    res.product.category = req.body.category;
  }
  if (req.body.name != null) {
    res.product.name = req.body.name;
  }
  if (req.body.description != null) {
    res.product.description = req.body.description;
  }
  if (req.body.image != null) {
    res.product.image = req.body.image;
  }
  if (req.body.features != null) {
    res.product.features = req.body.features;
  }
  if (req.body.dimensions != null) {
    res.product.dimensions = req.body.dimensions;
  }
  if (req.body.specifications != null) {
    res.product.specifications = req.body.specifications;
  }
  if (req.body.ratings != null) {
    res.product.ratings = req.body.ratings;
  }
  if (req.body.actualPrice != null) {
    res.product.actualPrice = req.body.actualPrice;
  }
  if (req.body.offerPrice != null) {
    res.product.offerPrice = req.body.offerPrice;
  }
  if (req.body.sizes != null) {
    res.product.sizes = req.body.sizes;
  }
  if (req.body.quantityInStock != null) {
    res.product.quantityInStock = req.body.quantityInStock;
  }
  if (req.body.colour != null) {
    res.product.colour = req.body.colour;
  }
  if (req.body.deliveryTime != null) {
    res.product.deliveryTime = req.body.deliveryTime;
  }
  if (req.body.instorePickupTime != null) {
    res.product.instorePickupTime = req.body.instorePickupTime;
  }
  // Update other fields as needed

  try {
    const updatedProduct = await res.product.save();
    console.log(JSON.stringify(updatedProduct))
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});




// DELETE user by ID
router.delete("/:id", authMiddleware, isAdmin, async (req, res) => {
  
  try {
    const { id } = req.params;

    // Find the user by ID
    const product = await Product.findByIdAndRemove(id);
    
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ message: "Error deleting product" });
  }
});
// Middleware function to get a specific product by ID
async function getProduct(req, res, next) {
    try {
      const product = await Product.findOne({ _id: req.params.id });
      if (product == null) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.product = product;
      next();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

export default router;
