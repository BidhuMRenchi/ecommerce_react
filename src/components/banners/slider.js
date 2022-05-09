import React from 'react';
import img1 from "./images/5.jpg";
import img2 from "./images/6.jpg";
import img3 from "./images/7.jpg";
import img4 from "./images/8.jpg";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import "./slider.css";


const Slider = () => { 
   return (
    <div>
    <AliceCarousel autoPlay autoPlayInterval="1000">
      <img src={img1} alt="abc" className="sliderimg1"/>
      <img src={img2} alt="abc" className="sliderimg1"/>
      <img src={img3} alt="abc" className="sliderimg1"/>
      <img src={img4} alt="abc" className="sliderimg1"/>
</AliceCarousel>
  </div>
);
};

export default Slider;