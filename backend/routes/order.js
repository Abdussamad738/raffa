import { Router } from 'express';
import Order from '../models/Order.js';
import User from '../models/User.js';
import { authMiddleware,isAdmin } from '../middleware/auth.js';
const router = Router();

// Create a new order
router.post('/', async (req, res) => {
  try {
    const {
      userId,
      price,
      transactionDate,
      deliveryDate,
      shippingMethod,
      productRating,
      shippingRating,
      customerName,
      orderNumber,
      products,
      status,
      deliveryAddress,
    } = req.body;

    const order = new Order({
      userId,
      price,
      transactionDate,
      deliveryDate,
      shippingMethod,
      productRating,
      shippingRating,
      customerName,
      orderNumber,
      products,
      status,
      deliveryAddress,
    });

    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create order', error });
  }
});

// Get all orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch orders', error });
  }
});

// Get a specific order by ID
router.get('/:orderId', async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch order', error });
  }
});

// Update an order
router.patch('/:orderId', async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { $set: req.body },
      { new: true }
    );
    if (!updatedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update order', error });
  }
});

// Delete an order
router.delete('/:orderId', async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const deletedOrder = await Order.findByIdAndRemove(orderId);
    if (!deletedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json({ message: 'Order deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete order', error });
  }
});
router.get('/all', authMiddleware,isAdmin,async (req, res) => {
  try {

    // Fetch all users with their orders
    const users = await User.find({}, 'name email phone orderHistory');

    // Extract and format the order details
    const orders = users.reduce((allOrders, user) => {
      const userOrders = user.orderHistory.map((order) => ({
        orderNumber: order.orderNumber,
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
});

export default router;