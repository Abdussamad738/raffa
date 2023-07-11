import { Button } from "baseui/button";
import { Input } from "baseui/input";
import { HeadingXXLarge } from "baseui/typography";
import { useFormik } from "formik";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
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

  const onSubmit = async (values) => {
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:9000/users/register",
        values
      );

      // Redirect the user after successful registration (optional)
      navigate("/login"); // Replace '/login' with the desired route for the login page
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

  return (
    <Container>
      <InnerContainer>
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
      </InnerContainer>
    </Container>
  );
}

export default Register;
