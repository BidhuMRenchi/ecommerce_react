import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import img4 from "../../assets/images/8.jpg";
import "./productCard.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

const ProductCard = () => {
  const navigate = useNavigate();
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

// <div className="site-card-wrapper">
// <Card
//   hoverable
//   style={{ width: 300 }}
//   cover={<img alt="example" src={img4} />}
//   actions={[
//     <Link to={"/favourites"}>
//       <HeartOutlined key="setting" />
//     </Link>,
//     <Link to={"/cart"}>
//       <ShoppingCartOutlined key="edit" />
//     </Link>,
//   ]}
// >
//   <Meta
//     // avatar={<Avatar src="https://joeschmoe.io/api/v1/random." />}
//     title="Converse Mikka"
//     description="Comfort Comes First"
//   />
// </Card>
// </div>
// <div className="site-card-wrapper">
// <Card
//   hoverable
//   style={{ width: 300 }}
//   cover={<img alt="example" src={img4} />}
//   actions={[
//     <Link to={"/favourites"}>
//       <HeartOutlined key="setting" />
//     </Link>,
//     <Link to={"/cart"}>
//       <ShoppingCartOutlined key="edit" />
//     </Link>,
//   ]}
// >
//   <Meta
//     // avatar={<Avatar src="https://joeschmoe.io/api/v1/random." />}
//     title="Converse Mikka"
//     description="Comfort Comes First"
//   />
// </Card>
// </div>
// <div className="site-card-wrapper">
// <Card
//   hoverable
//   style={{ width: 300 }}
//   cover={<img alt="example" src={img4} />}
//   actions={[
//     <Link to={"/favourites"}>
//       <HeartOutlined key="setting" />
//     </Link>,
//     <Link to={"/cart"}>
//       <ShoppingCartOutlined key="edit" />
//     </Link>,
//   ]}
// >
//   <Meta
//     // avatar={<Avatar src="https://joeschmoe.io/api/v1/random." />}
//     title="Converse Mikka"
//     description="Comfort Comes First"
//   />
// </Card>
// </div>
// <div className="site-card-wrapper">
// <Card
//   hoverable
//   style={{ width: 300 }}
//   cover={<img alt="example" src={img4} />}
//   actions={[
//     <Link to={"/favourites"}>
//       <HeartOutlined key="setting" />
//     </Link>,
//     <Link to={"/cart"}>
//       <ShoppingCartOutlined key="edit" />
//     </Link>,
//   ]}
// >
//   <Meta
//     // avatar={<Avatar src="https://joeschmoe.io/api/v1/random." />}
//     title="Converse Mikka"
//     description="Comfort Comes First"
//   />
// </Card>
// </div>
// <div className="site-card-wrapper">
// <Card
//   style={{ width: 300 }}
//   cover={<img alt="example" src={img4} />}
//   actions={[
//     <Link to={"/favourites"}>
//       <HeartOutlined key="setting" />
//     </Link>,
//     <Link to={"/cart"}>
//       <ShoppingCartOutlined key="edit" />
//     </Link>,
//   ]}
// >
//   <Meta
//     // avatar={<Avatar src="https://joeschmoe.io/api/v1/random." />}
//     title="Converse Mikka"
//     description="Comfort Comes First"
//   />
// </Card>
// </div>
// <div className="site-card-wrapper">
// <Card
//   style={{ width: 300 }}
//   cover={<img alt="example" src={img4} />}
//   actions={[
//     <Link to={"/favourites"}>
//       <HeartOutlined key="setting" />
//     </Link>,
//     <Link to={"/cart"}>
//       <ShoppingCartOutlined key="edit" />
//     </Link>,
//   ]}
// >
//   <Meta
//     // avatar={<Avatar src="https://joeschmoe.io/api/v1/random." />}
//     title="Converse Mikka"
//     description="Comfort Comes First"
//   />
// </Card>
// </div>
// <div className="site-card-wrapper">
// <Card
//   style={{ width: 300 }}
//   cover={<img alt="example" src={img4} />}
//   actions={[
//     <Link to={"/favourites"}>
//       <HeartOutlined key="setting" />
//     </Link>,
//     <Link to={"/cart"}>
//       <ShoppingCartOutlined key="edit" />
//     </Link>,
//   ]}
// >
//   <Meta
//     // avatar={<Avatar src="https://joeschmoe.io/api/v1/random." />}
//     title="Converse Mikka"
//     description="Comfort Comes First"
//   />
// </Card>
// </div>
// <div className="site-card-wrapper">
// <Card
//   style={{ width: 300 }}
//   cover={<img alt="example" src={img4} />}
//   actions={[
//     <Link to={"/favourites"}>
//       <HeartOutlined key="setting" />
//     </Link>,
//     <Link to={"/cart"}>
//       <ShoppingCartOutlined key="edit" />
//     </Link>,
//   ]}
// >
//   <Meta
//     // avatar={<Avatar src="https://joeschmoe.io/api/v1/random." />}
//     title="Converse Mikka"
//     description="Comfort Comes First"
//   />
// </Card>
// </div>
