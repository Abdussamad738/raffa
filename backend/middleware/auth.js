
import jwt from 'jsonwebtoken';
// Middleware for user authentication
export const authMiddleware = (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ message: 'Authentication failed: Token missing' });
    }

    const decodedToken = jwt.verify(token, 'your-secret-key'); // Replace 'your-secret-key' with your actual secret key
    req.user = decodedToken.user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Authentication failed: Invalid token' });
  }
};

// Middleware for user authorization (isAdmin)
export const isAdmin = (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(403).json({ message: 'Authorization failed: User not authenticated' });
    }

    // Check user roles or permissions here (e.g., if admin, allow access)
    // Example:
    if (req.user.role !== 'admin') {
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
