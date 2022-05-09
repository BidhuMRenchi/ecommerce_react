import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import axios from "axios";
import "../assets/home.css";
import { Table } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Cart = () => {
  const API_URL = "http://localhost/ecommerce/api/cart.php";

  const [sdata, setData] = useState("");
  const saved = localStorage.getItem("id");
  const customerId = JSON.parse(saved);
  

  const getData = () => {
    axios
      .post(API_URL, {
        customerId,
      })
      .then((response) => {
        console.log(response);
        const myData = response.data;
        setData(myData);
        
      });
  };

  useEffect(() => getData(), []);

  return (
    <>
      <Navbar />
      <h3 className="favHead">CART</h3>
      <div className="tableCart">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Product</TableCell>
                <TableCell align="center">Quantity</TableCell>
                <TableCell align="center">Description</TableCell>
                <TableCell align="center">Price</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {sdata.data?.map((repos) => {
                return (
                  <TableRow
                    key={repos.cid}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">{repos.name}</TableCell>
                    <TableCell align="center">{repos.quantity}</TableCell>
                    <TableCell align="center">{repos.shortDescription}</TableCell>
					<TableCell align="center" >{repos.price}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default Cart;
