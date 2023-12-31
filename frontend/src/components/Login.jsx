import { Button } from "baseui/button";
import { Input } from "baseui/input";
import { HeadingXXLarge } from "baseui/typography";
import { setUser } from "../utils/userActions";
import { useDispatch } from 'react-redux';
import { useSignIn } from "react-auth-kit";
import { useFormik } from "formik";
import axios, { AxiosError } from "axios";
import React,{ useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import '../styles/login.css'
import { addToCart } from '../utils/productActions';
import {
    Container,
    ErrorText,
    InnerContainer,
    
  } from "../utils/commons";
function Login() {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  const [error, setError] = useState("");
  const signIn = useSignIn();
  const navigate = useNavigate();
  
  const dispatch = useDispatch();
  const onSubmit = async (values) => {
    // setError("");

    try {
      const response = await axios.post(
        `${backendUrl}/users/login`,
        values
      );

      signIn({
        token: response.data.token,
        expiresIn: 3600,
        tokenType: "Bearer",
        authState: { email: values.email },
      });
      sessionStorage.setItem("token", response.data.token);
      const  cart  = response.data.user.cart;

      // Dispatch the setCart action to set the cart in the Redux store
      cart.forEach((item) => {
        dispatch(addToCart(item.productDetails));
      });
      const userData = response.data;
      dispatch(setUser(userData, response.data.token));
      
  if (userData.user.role === "admin") {
    navigate("/admin"); // Redirect to the admin routes
  } else {
    navigate("/user/cart"); // Redirect to the user dashboard
  }
    } catch (err) {
      if (err && err instanceof AxiosError)
        setError(err.response?.data.message);
      else if (err && err instanceof Error) setError(err.message);

    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
  });

  const handleRegisterClick = () => {
    navigate("/register"); // Replace '/register' with the route to the Register.jsx file
  };

  return (
    <Container>
      <InnerContainer>
        <form onSubmit={formik.handleSubmit}>
          <HeadingXXLarge>Sign In</HeadingXXLarge>
          {error && <ErrorText>{error}</ErrorText>}
          <Input
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Email"
            clearOnEscape
            size="large"
            type="email"
          />
          <Input
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="Password"
            clearOnEscape
            size="large"
            type="password"
          />
          <Button
            size="large"
            kind="primary"
            isLoading={formik.isSubmitting}
            type="submit"
            className="btn-login"
          >
            Login
          </Button>
          <Button size="large" className="btn-register" onClick={handleRegisterClick}>
            Register
          </Button>
        </form>
        <div className="forgot-password" >
        <Link to="/forgot-password">Forgot Password?</Link>
        </div>
      </InnerContainer>
    </Container>
  );
}

export default Login;
