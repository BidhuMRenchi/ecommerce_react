import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import "../assets/home.css";
import img1 from "../assets/images/1.png";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Sidebar from "../components/sidebar/sidebar";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { Button } from "@mui/material";
// import { Alert } from "antd";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import { AlertTitle } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
    email: Yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    phoneNumber: Yup
        .string('Enter your phoneNumber')
        .min(10, 'phoneNumber should be of 10 number length')
        .max(10, 'phoneNumber should be of 10 number length')
        .required('phoneNumber is required'),
    userName: Yup
        .string('Enter your userName')
        .required('userName is required'),
    address: Yup
        .string('Enter your userName')
        .required('userName is required'),
});

var profileData = [];
var prf = []; 

const Mprf = () => {
  const nav = useNavigate();
  const API_URL = "http://localhost/ecommerce/api/prof01.php";
  const API_URL01 = "http://localhost/ecommerce/api/edit_customer.php";

  const [sdata, setData] = useState("");
  const customerId = localStorage.getItem("id");
  const customerName =  "";
  const email=  "";
  const gender=  "";
  const phoneNumber=  "";
  const address="";
  const auth = localStorage.getItem("token");
  const data = {
    customerId: customerId,
  };
  // const customerId = JSON.parse(saved);

  const config = {
    headers: {
      Authorization: `Bearer ${auth}`,
      "Content-Type": "application/json",
    },
  };


  const getData = () => {
    axios.post(API_URL, data, config).then((response) => {
      console.log(response);
      const myData = response.data;
      setData(myData);
      profileData = response.data.data;
      console.log(profileData[0].name);
      prf= profileData[0];
      
    });
  };

     

  const formiks = useFormik({
    initialValues: {
        customerId: customerId,
        customerName: prf.name,
        email: prf.email,
        phoneNumber: prf.phoneNumber,
        gender: prf.gender,
        address:prf.address

    },
    validateOnMount: true,
    validationSchema: validationSchema,
  
    onSubmit: (values) => {
      
      console.log(JSON.stringify(values, null, 2));

      axios.put(API_URL01, values, config).then((response) => {
        console.log(response);
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          This is a success alert — <strong>check it out!</strong>
        </Alert>;
  
        nav("/profile");
      });

      
    },
  });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const data2 = {
//       customerId: customerId,
//       customerName: e.target.customerName.value,
//       phoneNumber: e.target.phoneNumber.value,
//       gender: e.target.gender.value,
//       email: e.target.email.value,
//       address: e.target.address.value,
//     };
//     console.log(data2);
//     axios.put(API_URL01, data2, config).then((response) => {
//       console.log(response);
//       <Alert severity="success">
//         <AlertTitle>Success</AlertTitle>
//         This is a success alert — <strong>check it out!</strong>
//       </Alert>;

//       nav("/profile");
//     });
//   };

  useEffect(() => getData(), []);

  return (
    <>
      <Navbar />
      <div className="managePrf">
        <Sidebar />
        {sdata.data?.map((repos) => {
          return (
            <Box
              className="prfForm"
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "80ch" },
              }}
              noValidate
              onSubmit={formiks.handleSubmit}
              autoComplete="on"
            >
              <TextField
                label="Name"
                id="customerName"
                name="customerName"
                color="secondary"
                defaultValue={prf.name}
                onChange={formiks.handleChange}
                error={formiks.touched.userName && Boolean(formiks.errors.userName)}
                helperText={formiks.touched.userName && formiks.errors.userName}
              />
              <br />
              <TextField
                label="Email"
                id="email"
                name="email"
                color="secondary"
                defaultValue={profileData[0].email}
                onChange={formiks.handleChange}
                error={formiks.touched.email && Boolean(formiks.errors.email)}
                helperText={formiks.touched.email && formiks.errors.email}
              />
              <br />
              <TextField
                label="Phone Number"
                id="phoneNumber"
                name="phoneNumber"
                // defaultValue={repos.phoneNumber}
                color="secondary"
                defaultValue={prf.phoneNumber}
                onChange={formiks.handleChange}
                error={formiks.touched.phoneNumber && Boolean(formiks.errors.phoneNumber)}
                helperText={formiks.touched.phoneNumber && formiks.errors.phoneNumber}
              />
              <br />

              <FormLabel id="gender">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="gender"
                defaultValue={prf.gender}
                onChange={formiks.handleChange}
                // onChange={handleChange}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
              <br />
              <TextField
                label="Address"
                id="address"
                name="address"
                // defaultValue={repos.address}
                color="secondary"
                defaultValue={prf.address}
                onChange={formiks.handleChange}
                error={formiks.touched.address && Boolean(formiks.errors.address)}
                helperText={formiks.touched.address && formiks.errors.address}
              />
              <br />
              <br />

              <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
              >
                Update
              </Button>
            </Box>
          );
        })}
      </div>
    </>
  );
};

export default Mprf;
