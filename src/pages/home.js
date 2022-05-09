import React from "react";
import Navbar from "../components/navbar";
import { Divider } from 'antd';
import ProductCard from "../components/product_card/productCard";
import Slider01 from "../components/slider001/productCard";
import "../assets/home.css";

const Home = () => {
  return (
    <>
    <Navbar/>
      <br></br>
      <div className="slider01">
        <div className="head02">
          <h3 className="head01">All New Collections</h3>
        </div>
        <Slider01 />
        <Divider/>
        <div className="head02">
          <h3 className="head01">Top Selling Products</h3>
        </div>
        <ProductCard />
        <Divider/>
      </div>
    </>
  );
};

export default Home;
