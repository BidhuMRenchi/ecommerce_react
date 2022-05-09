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
import { Alert } from "antd";
import { useNavigate } from "react-router-dom";
import ChangePassword from "./change_pass";

const Manage = () => {
  const nav = useNavigate();
  const API_URL = "http://localhost/ecommerce/api/prof01.php";
  const API_URL01 = "http://localhost/ecommerce/api/edit_customer.php";

  const [sdata, setData] = useState("");
  const customerId = localStorage.getItem("id");
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
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data2 = {
      customerId: customerId,
      customerName: e.target.customerName.value,
      phoneNumber: e.target.phoneNumber.value,
      gender: e.target.gender.value,
      email: e.target.email.value,
      address: e.target.address.value,
    };
    console.log(data2);
    axios.put(API_URL01, data2, config).then((response) => {
      console.log(response);
      <Alert message="Success Tips" type="success" showIcon />
      nav("/profile");
    });
    
  };

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
              onSubmit={handleSubmit}
              autoComplete="on"
            >
              <TextField
                label="Name"
                id="customerName"
                name="customerName"
                defaultValue={repos.name}
                color="secondary"
                helperText="Please enter your name"
              />
              <br />
              <TextField
                label="Email"
                id="email"
                name="email"
                defaultValue={repos.email}
                color="secondary"
                helperText="Please enter your email"
              />
              <br />
              <TextField
                label="Phone Number"
                id="phoneNumber"
                name="phoneNumber"
                defaultValue={repos.phoneNumber}
                color="secondary"
                helperText="Please enter your phone number"
              />
              <br />

              <FormLabel id="gender">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="gender"
                defaultValue={repos.gender}
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
                defaultValue={repos.address}
                color="secondary"
                helperText="Please enter your address"
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

export default Manage;
