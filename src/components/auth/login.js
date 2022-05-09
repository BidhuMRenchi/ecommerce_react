import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./login.css";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  passwords: yup
    .string("Enter your password")
    .min(6, "Password should be of minimum 6 characters length")
    .max(15, "Password should be of maximum 15 characters length")
    .required("Password is required"),
});

const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const [passwords, setPasswords] = useState("");
  let navigate = useNavigate();
  const API_URL = "http://localhost/ecommerce/api/login2.php";

  const formik = useFormik({
    initialValues: {
      email: "",
      passwords: "",
    },
    validateOnMount: true,
    validationSchema: validationSchema,
    // const submitForm = (e) => {
    //   e.preventDefault();
    onSubmit: (values) => {
      setIsSubmitting(true);
      console.log(JSON.stringify(values, null, 2));
      console.log({ email }, { passwords });

      const data = {
        email,
        passwords,
      };

      axios
        .post(API_URL, JSON.stringify(values))
        .then(function (response) {
          console.log(response);
          console.warn(response.status);
          if (response.data.jwt) {
            localStorage.setItem("token", response.data.jwt);
            localStorage.setItem("id", response.data.id);
            localStorage.setItem("user", response.data.name);
            navigate("/home");
          } else {
            document.getElementById("p").textContent =
              "Invalid Credentials.. try again.";
            navigate("/");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  });

  return (
    <>
      <div className="App"></div>
      <div className="form1">
        <form className="form01" onSubmit={formik.handleSubmit}>
          <h1>LOGIN</h1>
          <label>
            Email :<br></br>
            <input
              required
              type="text"
              id="email"
              name="email"
              // onChange={(e) => setEmail(e.target.value)}
              value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
            />
          </label>
          <br></br>
          <br></br>
          <label>
            Password :<br></br>
            <input
              required
              id="passwords"
              type="password"
              name="passwords"
              // onChange={(e) => setPasswords(e.target.value)}
              value={formik.values.passwords}
          onChange={formik.handleChange}
          error={formik.touched.passwords && Boolean(formik.errors.passwords)}
          helperText={formik.touched.passwords && formik.errors.passwords}
            />
          </label>
          <br></br>
          <br></br>
          <input className="btn" type="submit" value="Submit" disabled={ !formik.isValid || isSubmitting}/>
          {/*  */}
          <p id="p"></p>
        </form>
      </div>
    </>
  );
};

export default Login;
