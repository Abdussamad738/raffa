import React, { useState } from 'react';
import axios from 'axios';
import VerifyOtp from './VerifyOtp';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    try {
      // Send a request to the backend to initiate the forgot password process
      await axios.post(`${backendUrl}/users/forgot-password`, { email });
      setOtpSent(true);
    } catch (error) {
      console.log('An error occurred while initiating forgot password:', error);
    }
  };

  return (
    <div>
      {otpSent ? (
        <VerifyOtp email={email} />
      ) : (
        <form onSubmit={handleForgotPassword}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ForgotPassword;
