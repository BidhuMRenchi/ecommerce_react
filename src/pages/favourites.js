import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card } from "antd";
import "../assets/home.css";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

const { Meta } = Card;
const Favourites = () => {
  const API_URL = "http://localhost/ecommerce/api/favourites.php";

  const [sdata, setData] = useState("");
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
      console.log(sdata)
    });
  };

  useEffect(() => getData(), []);
  return (
    <>
      <Navbar />
      <h3 className="favHead">Favourites</h3>
      <br></br>
      <div className="favs">
        {sdata.data?.map((repos) => {
          return (
            <Card
              className="BeerListItem-main-card01"
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  className="BeerListItem-img01"
                  alt="example"
                  src={require(`../assets/shop/${repos.image}`)}
                />
              }
              actions={[
                <Link to={"/cart"}>
                  <Button type="primary" icon={<ShoppingCartOutlined />}>
                    {" "}
                    Add to cart
                  </Button>
                </Link>,
              ]}
            >
              <Meta title={repos.name} description={repos.shortDescription} />
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default Favourites;
