
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
// Middleware for user authentication
export const authMiddleware = (req, res, next) => {
  console.log("from authMiddleware")
  try {
    
    const token = req.header('Authorization').replace('Bearer ', '');
    console.log("token:",token)
    if (!token) {
      return res.status(401).json({ message: 'Authentication failed: Token missing' });
    }

    const decodedToken = jwt.verify(token, 'your-secret-key'); // Replace 'your-secret-key' with your actual secret key
    req.user = decodedToken.user_id;
    console.log("from authmiddleware,req.user is:",JSON.stringify(req.user))
    next();
  } catch (error) {
    res.status(401).json({ message: 'Authentication failed: Invalid token' });
  }
};

// Middleware for user authorization (isAdmin)
export const isAdmin = async (req, res, next) => {
  console.log("from isAdmin",JSON.stringify(req.user));
  try {
    if (!req.user) {
      return res.status(403).json({ message: 'Authorization failed: User not authenticated' });
    }

    // Find the user by their ID
    const user = await User.findById(req.user);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the user's role is 'admin'
    if (user.role !== 'admin') {
      return res.status(403).json({ message: 'Authorization failed: User not authorized as admin' });
    }

    next();
  } catch (error) {
    res.status(401).json({ message: 'Authorization failed: Invalid token' });
  }
};

// module.exports = {
//   authMiddleware,
//   isAdmin,
// };
