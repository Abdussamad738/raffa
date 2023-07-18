// Import the necessary models and dependencies
import Product from '../models/Product.js';
import User from '../models/User.js';
import Order from '../models/Order.js';
// const Email = require('../models/Email');



// Create a new admin user object
// const adminUser = new User({
//   name: 'samad',
//   email: 'sam@example.com',
//   password: 'sam',
//   role:"admin",
//   phone:"12345678",
//   isAdmin: true, // Set the isAdmin flag to true for admin privileges
// });

// Save the admin user to the user collection
// adminUser.save()
//   .then(savedUser => {
//     console.log('Admin user added successfully:', savedUser);
//   })
//   .catch(error => {
//     console.error('Failed to add admin user:', error);
//   });
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
    console.log("from getUserManagement")
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch users', error });
  }
};

// Controller for Order Management
export const getOrderManagement = async (req, res) => {
  try {
    // Fetch and return all orders from the database
    

    console.log("from getOrderManagement")
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
    console.log("from orders/all",JSON.stringify(orders))
    res.json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ message: 'Error fetching orders' });
  }
    
};

// Controller for Email Management
// const getEmailManagement = async (req, res) => {
//   try {
//     // Fetch and return all emails from the database
//     const emails = await Email.find();
//     res.json(emails);
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to fetch emails', error });
//   }
// };

// Controller for Analytics
export const getAnalytics = async (req, res) => {
  try {
    // Perform necessary analytics calculations and return the results
    // Example: Calculate sales, revenue, sales by category, etc.
    const sales = 100;
    const revenue = 5000;
    const salesByCategory = [
      { category: 'Electronics', sales: 50 },
      { category: 'Clothing', sales: 30 },
      { category: 'Home Decor', sales: 20 },
    ];

    res.json({ sales, revenue, salesByCategory });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch analytics data', error });
  }
};

export const checkAccess = (req, res) => {
  console.log("checkaccess")
  // If the middleware chain reaches this point, it means the user has admin access
  res.status(200).json({ message: 'User has admin access' });
};



// module.exports = {
//   getProductManagement,
//   getUserManagement,
//   getOrderManagement,
//   getEmailManagement,
//   getAnalytics,
//   checkAccess,
// };
