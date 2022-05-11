import { useNavigate } from "react-router-dom";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";
import "./login.css";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  passwords: yup
    .string("Enter your password")
    // .min(8, 'Password should be of minimum 8 characters length')
    // .max(15, 'Password should be of maximum 15 characters length')
    .required("Password is required"),
});

function Loginval() {
  const API_URL = "http://localhost/ecommerce/api/login2.php";
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      passwords: "",
    },
    validateOnMount: true,
    validationSchema: validationSchema,

    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));

      axios
        .post(API_URL, JSON.stringify(values))
        .then(function (response) {
          console.log(response);
          console.warn(response.status);
          if (response.data) {
            localStorage.setItem("token", response.data.jwt);
            localStorage.setItem("id", response.data.id);
            localStorage.setItem("user", response.data.name);
            localStorage.setItem("isAuthenticated", "true");
            navigate("/home");
          } else {
            document.getElementById("p").textContent =
              "Invalid Credentials.. try again.";
            navigate("/");
          }
        })
        .catch(function (error) {
          document.getElementById("p").textContent =
            "Invalid Credentials.. try again.";
          navigate("/");
          console.log(error);
        });
    },
  });

  return (
    <div className="form01">
      <form onSubmit={formik.handleSubmit}>
        <h1>LOGIN</h1>
        <br />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="EMAIL"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <br />
        <br />
        <TextField
          fullWidth
          id="passwords"
          name="passwords"
          label="PASSWORD"
          type="password"
          value={formik.values.passwords}
          onChange={formik.handleChange}
          error={formik.touched.passwords && Boolean(formik.errors.passwords)}
          helperText={formik.touched.passwords && formik.errors.passwords}
        />{" "}
        <p id="p"></p>
        <br />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}

export default Loginval;
