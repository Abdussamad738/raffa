const authorizeUser = (req, res, next) => {
    // Check if the user role is authorized to access the route
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Forbidden. You are not authorized to access this resource.' });
    }
  
    // Proceed to the next middleware or route
    next();
  };
  
  export default authorizeUser;