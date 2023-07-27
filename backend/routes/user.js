import dotenv from 'dotenv';
import { Router } from 'express';
import { checkAccess } from '../controllers/admin.js';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { authMiddleware, isAdmin } from '../middleware/auth.js';
import sgMail from '@sendgrid/mail'
import { v4 as uuidv4 } from 'uuid';
dotenv.config();
const router = Router();


const SENDGRID_API_KEY=process.env.SENDGRID_API_KEY
sgMail.setApiKey(SENDGRID_API_KEY)

// Route for user registration
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
    console.log("from user.js",JSON.stringify(name))
    console.log("from user.js",JSON.stringify(email))
    console.log("from user.js",JSON.stringify(password))
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }
    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000);

    const user = new User({
      name,
      email,
      password,
      otp,
    });

    await user.save();
    const msg = {
      to: email, // Change to your recipient
      from: 'samadbinabdulla123@gmail.com', // Change to your verified sender
      subject: 'Registration OTP',
      text: `Your OTP is: ${otp}`,
      html: `<strong>Your OTP is: ${otp}</strong>`,
    }
    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent')
      })
      .catch((error) => {
        console.error(error)
      })

    const token = jwt.sign({ user_id: user._id }, 'your-secret-key', {
      expiresIn: '1h',
    });

    res.status(201).json({ user, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.post('/insertcartitems', async (req, res) => {
  
  const { userId, cartItems } = req.body;
  console.log("this is from insertcartitems router cartitems:-,",JSON.stringify(cartItems))
  

// Copy the cartItems to user.cart


  try {
    // Find the user by userId
    const user = await User.findById(userId);
    // console.log("user is,",JSON.stringify(user))
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    // console.log("cartItems is,",JSON.stringify(cartItems))
    // const updatedUser = { ...user };
    user.cart = [...cartItems];
    
    
      console.log("user is,",JSON.stringify(user))
    // Update the user's cart with the new cart items
    // user.cart = cartItems;
    console.log("user.cart is:",JSON.stringify(user.cart))

    // Save the updated user in the database
    await user.save();

    res.status(200).json({ message: 'Cart items inserted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error inserting cart items', error });
  }
});
// Route for user login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log("from login router, body is:",JSON.stringify(req.body))
  // const cartItems = req.body.cartItems || {};
  // console.log(JSON.stringify(cartItems))

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ user_id: user._id }, 'your-secret-key', {
      expiresIn: '1h',
    });
    req.user = user;
    // user.cart = cartItems;
    await user.save(); 
    // dispatch(updateUserCart(cartItems));

    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route for getting user profile
router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE user by ID
router.delete("/:id", authMiddleware, isAdmin, async (req, res) => {
  console.log("from delete")
  try {
    const { id } = req.params;

    // Find the user by ID
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Delete the user
    await user.remove();

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Error deleting user" });
  }
});


// Route for updating user profile
router.patch('/profile', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const { username, email, phone } = req.body;

    if (username) user.username = username;
    if (email) user.email = email;
    if (phone) user.phone = phone;

    await user.save();

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route for getting user order history
router.get('/orders', authMiddleware, async (req, res) => {
  try {
    // Find the user by user ID
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Retrieve the order history from the user object
    const orderHistory = user.orderHistory;

    // Return the order history in the response
    res.json(orderHistory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route for admin to get all users (requires isAdmin middleware)
router.get('/all', authMiddleware, isAdmin, async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:userId/cart', async (req, res) => {
  const userId = req.params.userId;

  try {
    // Find the user by user ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Retrieve the cart data from the user object
    const cart = user.cart;

    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cart data', error });
  }
});

//Password Reset

// Route for initiating the forgot password process
router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;

  try {
    // Check if the email exists in the database
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Generate an OTP
    const otp = uuidv4().slice(0, 6);

    // Save the OTP to the user's document in the database
    user.forgotPasswordOTP = otp;
    await user.save();

    // Send the OTP via email
    const transporter = nodemailer.createTransport({
      // Configure the email transporter (SMTP details)
    });

    const mailOptions = {
      from: 'samadbinabdulla123@gmail.com',
      to: email,
      subject: 'Forgot Password - OTP Verification',
      text: `Your OTP for resetting the password is: ${otp}`,
    };
    sgMail
      .send(mailOptions)
      .then(() => {
        console.log('Email sent')
      })
      .catch((error) => {
        console.error(error)
      })

   
  } catch (error) {
    console.log('Error in forgot password route:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Route for verifying the OTP
router.post('/verify-otp', async (req, res) => {
  const { email, otp } = req.body;

  try {
    // Check if the email exists in the database
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the OTP matches the one in the database
    if (user.forgotPasswordOTP !== otp) {
      return res.status(400).json({ message: 'Invalid OTP' });
    }

    // If OTP is verified, clear the OTP field in the user's document
    user.forgotPasswordOTP = undefined;
    await user.save();

    res.status(200).json({ message: 'OTP verified successfully' });
  } catch (error) {
    console.log('Error in verify OTP route:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Route for resetting the password
router.post('/reset-password', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the email exists in the database
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update the user's password
    user.password = password;
    await user.save();

    res.status(200).json({ message: 'Password reset successful' });
  } catch (error) {
    console.log('Error in reset password route:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// router.post('/updateaddress', async (req, res) => {
  
//   const { userId, deliveryAddress } = req.body;
//   console.log("this is from router.post :",JSON.stringify(userId,deliveryAddress))
//   try {
//     // Find the user by userId
//     const user = await User.findById(userId);
//     console.log("from routes/user.js and the user is:",JSON.stringify(user,deliveryAddress))

//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     // Update the user's delivery address
//     user.orderHistory.deliveryAddress = deliveryAddress;
//     console.log("from updateaddress after try, deliveryAddress  is,",JSON.stringify(deliveryAddress))

//     // Save the updated user in the database
//     await user.save();

//     res.status(200).json({ message: 'Delivery address updated successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error updating delivery address', error });
//   }
// });

// Update user order history
router.post('/updateOrderHistory', async (req, res) => {
  const { userId, order } = req.body;
  console.log("from updateOrderhistory",userId)
  try {
    const user = await User.findById(userId);
    console.log("user",JSON.stringify(order))

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Generate a random 5-digit number for orderNumber
    const orderNumber = Math.floor(10000 + Math.random() * 90000);

    // Get the current timestamp for transactionDate
    const transactionDate = new Date();

    // Update the order with additional fields
    const updatedOrder = {
      orderNumber,
      transactionDate,
      deliveryDate: order.deliveryDate,
      status: order.status,
      price: order.price,
      shippingMethod: order.shippingMethod,
      productRating: order.productRating,
      shippingRating: order.shippingRating,
      customerName: user.name,
      products: order.products,
      deliveryAddress: order.deliveryAddress,
    };

    user.orderHistory.push(updatedOrder);

    await user.save();

    res.status(200).json({ message: 'Order history updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update order history', error });
  }
});

export default router;
