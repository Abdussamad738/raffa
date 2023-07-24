import { Button } from "baseui/button";
import { Input } from "baseui/input";
import { HeadingXXLarge } from "baseui/typography";
import { useFormik } from "formik";
import axios, { AxiosError } from "axios";
import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/login.css'
import {
  Container,
  ErrorText,
  InnerContainer,
  InputWrapper,
  StyledInput,
} from "../utils/commons";

function Register() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpdb,setOtpdb]=useState('');
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  const onSubmit = async (values) => {
    setError("");
    
  
    try {
      const response = await axios.post(
        `${backendUrl}/users/register`,
        values
      );
      console.log(JSON.stringify(response.data))
      setOtpdb(response.data.user.otp);
      setShowOtpInput(true);
      

      // Redirect the user after successful registration (optional)
       // Replace '/login' with the desired route for the login page
    } catch (err) {
      if (err && err instanceof AxiosError)
        setError(err.response?.data.message);
      else if (err && err instanceof Error) setError(err.message);

      console.log("Error: ", err);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit,
  });

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    // Perform OTP validation logic here
    // If OTP is valid, redirect to the desired page
    if (otp === otpdb) {
      // OTP is valid, redirect to the desired page
      navigate('/login'); // Replace '/user' with your desired route
    } else {
      // OTP is invalid, handle the error or display an error message
      console.log('Invalid OTP');
    } // Replace '/dashboard' with your desired route
  };

  return (
    <Container>
      <InnerContainer>
      {!showOtpInput ? (
        <form onSubmit={formik.handleSubmit}>
          <HeadingXXLarge>Register</HeadingXXLarge>
          {error && <ErrorText>{error}</ErrorText>}
          <Input
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            placeholder="Name"
            clearOnEscape
            size="large"
            type="text"
            required
          />
          <Input
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Email"
            clearOnEscape
            size="large"
            type="email"
            required
          />
          <Input
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="Password"
            clearOnEscape
            size="large"
            type="password"
            required
          />
          <Button
            size="large"
            kind="primary"
            isLoading={formik.isSubmitting}
            type="submit"
          >
            Register
          </Button>
        </form>
        ) : (
          <form onSubmit={handleOtpSubmit}>
            <HeadingXXLarge>Verify OTP</HeadingXXLarge>
            <Input
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              clearOnEscape
              size="large"
              type="text"
              required
            />
            <Button size="large" kind="primary" type="submit">
              Verify OTP
            </Button>
          </form>
        )}
      </InnerContainer>
    </Container>
  );
}

export default Register;
