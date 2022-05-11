import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./productCard.css";
import axios from "axios";

const { Meta } = Card;

const ProductCard = () => {
  const API_URL = "http://localhost/ecommerce/api/products.php";

  const [sdata, setData] = useState("");

  const getData = () => {
    axios.get(API_URL).then((response) => {
      console.log(response);
      const myData = response.data;
      setData(myData);
    });
  };
  useEffect(() => getData(), []);
  return (
    <>
      <div className="productCards">
        {sdata.data?.map((repos) => {
          return (
            <div className="site-card-wrapper">
              <Card
                className="BeerListItem-main-card"
                hoverable
                style={{ width: 300 }}
                cover={
                  <img
                    alt="example"
                    className="BeerListItem-img"
                    src={require(`../../assets/shop/${repos.image}`)}
                  />
                }
                actions={[
                  <Link to={"/favourites"}>
                    <HeartOutlined key="setting" />
                  </Link>,
                  <Link to={"/cart"}>
                    <ShoppingCartOutlined key="edit" />
                  </Link>,
                ]}
              >
                <Meta
                  // avatar={<Avatar src="https://joeschmoe.io/api/v1/random." />}
                  title={repos.name}
                  description={repos.shortDescription}
                />
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductCard;
