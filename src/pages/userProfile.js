import React,{useState,useEffect} from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import "../assets/home.css";
import Sidebar from "../components/sidebar/sidebar";
import { Table } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import img1 from "../assets/images/1.png";
import { Divider } from "antd";

const Profile = () => {

  const API_URL = "http://localhost/ecommerce/api/prof01.php";

  const API_URL01 = "http://localhost/ecommerce/api/orders.php";

  const [sdata, setData] = useState("");
  const [odata, setOData] = useState("");
  const customerId = localStorage.getItem('id');
  const auth = localStorage.getItem('token');
  const data = {
    customerId : customerId,
    }
  // const customerId = JSON.parse(saved);

  const config = {
    headers:
    { Authorization: `Bearer ${auth}`,
    'Content-Type' : 'application/json' }
    };

  const getData = () => {
    axios.post(API_URL,data, config).then((response) => {
      console.log(response);
      const myData = response.data;
      setData(myData);
    });
    axios.post(API_URL01,data, config).then((response) => {
      console.log(response);
      const myData1 = response.data;
      setOData(myData1);
    });
  };

  useEffect(() => getData(), []);

  return (
    <>
      <Navbar />

      <h4 className="prfHead">My Account</h4>
      <div className="topProfile">
        <Sidebar/>
        <div className="vl"></div>
        <div className="profileImg">
          <img alt="LOGO" width={550} height={450} src={img1} />
        </div>
        {sdata.data?.map((repos) => {
          return(
        <div className="profileData">
          Name &nbsp;&nbsp;&nbsp;&nbsp;: {repos.name}<br></br>
          Gender&nbsp;&nbsp;: {repos.gender}<br></br>
          Phone &nbsp;&nbsp;&nbsp;: {repos.phoneNumber}<br></br>
          Address : {repos.address}<br></br>
        </div>);
        })}
      </div>
      <Divider/>
      <h2 className="ordTitle">Orders</h2>
      <div className="tableOrders">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Id</TableCell>
                <TableCell align="center">Date</TableCell>
                <TableCell align="center">Total</TableCell>
                <TableCell align="center">Status</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {odata.data?.map((repos) => {
                return (
                  <TableRow
                    key={repos.cid}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">{repos.oid}</TableCell>
                    <TableCell align="center">{repos.date}</TableCell>
                    <TableCell align="center">{repos.totalprice}</TableCell>
                    <TableCell align="center">{repos.status}</TableCell>
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

export default Profile;
