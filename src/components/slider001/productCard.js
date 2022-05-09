import React from 'react';
import {Carousel} from 'antd';
import img1 from "../../assets/images/5.jpg";
import img2 from "../../assets/images/6.jpg";
import img3 from "../../assets/images/7.jpg";
import img4 from "../../assets/images/8.jpg";


// const contentStyle = {
//   height: '160px',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
// };

 const Slider01 = () =>{
     return (
      <Carousel autoplay>
      <div>
          <img alt='Image1' width={'100%'} height={'650px'} src={img1}/>
      </div>
      <div>
      <img alt='Image1' width={'100%'} height={'650px'} src={img2}/>
      </div>
      <div>
      <img alt='Image1' width={'100%'} height={'650px'} src={img3}/>
      </div>
      <div>
      <img alt='Image1' width={'100%'} height={'650px'} src={img4}/>
      </div>
    </Carousel>
);};

export default Slider01;