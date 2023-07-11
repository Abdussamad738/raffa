import { Button } from "baseui/button";
import { Input } from "baseui/input";
import { HeadingXXLarge } from "baseui/typography";
import { setUser } from "../utils/userActions";
import { useDispatch,useSelector } from 'react-redux';
import { useSignIn,useIsAuthenticated } from "react-auth-kit";
import { useFormik } from "formik";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import '../styles/login.css'
import { fetchCart } from "../utils/cartReducer";
import { addToCart ,fetchProduct } from '../utils/productActions';
import {
    Container,
    ErrorText,
    InnerContainer,
    InputWrapper,
    StyledInput,
  } from "../utils/commons";
function Login() {
  const [error, setError] = useState("");
  const signIn = useSignIn();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart);
  
  const dispatch = useDispatch();
  console.log("from login.jsx")
  const onSubmit = async (values) => {
    // setError("");

    try {
      const response = await axios.post(
        "http://localhost:9000/users/login",
        values
      );
      console.log("from login, ",JSON.stringify(response.data))

      signIn({
        token: response.data.token,
        expiresIn: 3600,
        tokenType: "Bearer",
        authState: { email: values.email },
      });
      
      const  cart  = response.data.user.cart;

      // Dispatch the setCart action to set the cart in the Redux store
      cart.forEach((item) => {
        dispatch(addToCart(item.productDetails));
      });
      const userData = response.data;
      dispatch(setUser(userData));
      // if (userData) {
      //   dispatch(fetchCart(userData._id));
      // }
      console.log("after successful login :",JSON.stringify(cart))
      // Redirect the user after successful login (optional)
      navigate("/user-dashboard"); // Replace '/dashboard' with the desired route
    } catch (err) {
      if (err && err instanceof AxiosError)
        setError(err.response?.data.message);
      else if (err && err instanceof Error) setError(err.message);

      console.log("Error: ", err);
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
      </InnerContainer>
    </Container>
  );
}

export default Login;
