// Import the necessary models and dependencies
import Product from '../models/Product.js';
import User from '../models/User.js';
import Order from '../models/Order.js';
// const Email = require('../models/Email');



// // Controller for Product Management
export const getProductManagement = async (req, res) => {
  try {
    // Fetch and return all products from the database
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch products', error });
  }
};

// Controller for User Management
export const getUserManagement = async (req, res) => {
  try {
    // Fetch and return all users from the database
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch users', error });
  }
};

// Controller for Order Management
export const getOrderManagement = async (req, res) => {
  try {
    // Fetch and return all orders from the database
    
    // Fetch all users with their orders
    const users = await User.find({}, 'name email phone orderHistory');
    
    // Extract and format the order details
    const orders = users.reduce((allOrders, user) => {
      const userOrders = user.orderHistory.map((order) => ({
        id: order.orderNumber,
        userId: user._id,
        customerName: user.name,
        price: order.price,
        transactionDate: order.transactionDate,
        deliveryDate: order.deliveryDate,
        shippingMethod: order.shippingMethod,
        products: order.products,
        status: order.status,
        deliveryAddress: order.deliveryAddress,
      }));

      return allOrders.concat(userOrders);
    }, []);

    res.json(orders);
  } catch (error) {

    res.status(500).json({ message: 'Error fetching orders' });
  }
    
};



// Controller for Analytics
export const getAnalytics = async (req, res) => {
  try {
    // Perform necessary analytics calculations and return the results
    // Example: Calculate sales, revenue, sales by category, etc.
    const sales = 100;
    const revenue = 5000;
    const salesByCategory = [
      { category: 'Football', sales: 50 },
      { category: 'Cricket', sales: 30 },
      { category: 'Volleyball', sales: 20 },
    ];

    res.json({ sales, revenue, salesByCategory });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch analytics data', error });
  }
};

export const checkAccess = (req, res) => {

  // If the middleware chain reaches this point, it means the user has admin access
  res.status(200).json({ message: 'User has admin access' });
};




