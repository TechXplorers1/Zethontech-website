import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/ServiceLayout.css';

import img1 from '../../assets/mobile1.png';
import img2 from '../../assets/mobile2.png';
import img3 from '../../assets/mobile3.png';
import img4 from '../../assets/mobile4.png';

const WebAppDev = () => {
  const images = [img1, img2, img3, img4];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="web-app-dev service-box">
      <h2 className="section-title">Web Application Development</h2>
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={idx}>
            <img src={img} alt={`Web Slide ${idx + 1}`} className="carousel-image" />
          </div>
        ))}
      </Slider>
      <div className="service-description">
        <p>We build scalable and modern web applications tailored to your business goals.</p>
        <p>Our solutions are secure, responsive, and performance-optimized across all devices.</p>
      </div>
    </div>
  );
};

export default WebAppDev;
