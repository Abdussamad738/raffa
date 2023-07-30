import { Router } from 'express';
const router = Router();
import Product from '../models/Product.js';
import { authMiddleware, isAdmin } from '../middleware/auth.js';


// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    console.log("this is from product.js")
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
  // Update other fields as needed

  try {
    const updatedProduct = await res.product.save();
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a product
// router.delete('/:id', getProduct, async (req, res) => {
//   try {
    
//     // await res.product.remove();
//     res.json({ message: 'Product deleted' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });


// DELETE user by ID
router.delete("/:id", authMiddleware, isAdmin, async (req, res) => {
  console.log("from delete")
  try {
    const { id } = req.params;

    // Find the user by ID
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Delete the user
    await product.remove();

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
      console.log("productId from getProduct:",product)
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
