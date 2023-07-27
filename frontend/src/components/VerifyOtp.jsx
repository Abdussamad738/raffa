import React, { useState } from 'react';
import axios from 'axios';
import ResetPassword from './ResetPassword';

const VerifyOtp = ({ email }) => {
  const [otp, setOtp] = useState('');
  const [otpVerified, setOtpVerified] = useState(false);
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    try {
      // Send a request to the backend to verify the OTP
      await axios.post( `${backendUrl}/user/verify-otp`, { email, otp });
      setOtpVerified(true);
    } catch (error) {
      console.log('OTP verification failed:', error);
    }
  };

  return (
    <div>
      {otpVerified ? (
        <ResetPassword email={email} />
      ) : (
        <form onSubmit={handleVerifyOtp}>
          <div>
            <label htmlFor="otp">Enter OTP:</label>
            <input
              type="text"
              id="otp"
              name="otp"
              value={otp}
              onChange={handleOtpChange}
              required
            />
          </div>
          <div>
            <button type="submit">Verify OTP</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default VerifyOtp;
