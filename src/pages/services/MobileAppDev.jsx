import React from 'react';
import Slider from "react-slick"; // npm install react-slick slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/ServiceLayout.css';

import img1 from '../../assets/mobile1.png';
import img2 from '../../assets/mobile2.png';
import img3 from '../../assets/mobile3.png';
import img4 from '../../assets/mobile4.png';

const MobileAppDev = () => {
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
    <div className="mobile-app-dev service-box">
      <h2 className="section-title">Mobile Application Development</h2>
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={idx}>
            <img src={img} alt={`Slide ${idx + 1}`} className="carousel-image" />
          </div>
        ))}
      </Slider>

      <div className="service-description">
        <p>We specialize in creating beautiful and user-friendly mobile apps for iOS and Android platforms.</p>
        <p>Our team ensures your app not only looks amazing but also functions smoothly and scales seamlessly.</p>
      </div>
    </div>
  );
};

export default MobileAppDev;
