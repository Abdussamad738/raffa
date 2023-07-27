import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const ResetPassword = ({ email }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const navigate = useNavigate();
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    

    try {
      // Send a request to the backend to reset the password
      await axios.post(`${backendUrl}/users/reset-password`, { email, password });
      // Redirect the user to the login page or show a success message
    } catch (error) {
      console.log('An error occurred while resetting the password:', error);
    }

    navigate('/login');
  };

  return (
    <div>
      <form onSubmit={handleResetPassword}>
        <div>
          <label htmlFor="password">New Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </div>
        <div>
          <button type="submit">Reset Password</button>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
