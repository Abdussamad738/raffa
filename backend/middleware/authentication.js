import { verify } from 'jsonwebtoken';

const authenticateUser = (req, res, next) => {
  // Get the token from the request header
  const token = req.header('Authorization');

  // Check if token exists
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized. No token provided.' });
  }

  try {
    // Verify the token and decode the payload
    const decodedToken = verify(token, 'your-secret-key'); // Replace 'your-secret-key' with your actual secret key used to sign the tokens

    // Attach the user information from the token to the request object
    req.user = decodedToken.user;

    // Proceed to the next middleware or route
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Unauthorized. Invalid token.' });
  }
};

export default authenticateUser;
