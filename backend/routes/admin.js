import express  from 'express';


import {getProductManagement,
  getUserManagement,
  getOrderManagement,
  // getEmailManagement,
  getAnalytics,
  checkAccess,}  from '../controllers/admin.js'
// Import the necessary controllers and middleware
import { isAdmin,authMiddleware } from '../middleware/auth.js';
const router = express.Router();
// Product Management
router.get('/products', isAdmin, getProductManagement);

// User Management
router.get('/users',isAdmin, getUserManagement);

// Order Management
router.get('/orders',authMiddleware, isAdmin, getOrderManagement);

// Email Management
// router.get('/emails', isAdmin, getEmailManagement);

// Analytics
router.get('/analytics', isAdmin, getAnalytics);

// Check Access
router.get('/check-access',authMiddleware,isAdmin, checkAccess);
export default router;