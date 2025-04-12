import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/ServiceLayout.css';

import img1 from '../../assets/mobile1.png';
import img2 from '../../assets/mobile2.png';
import img3 from '../../assets/mobile3.png';
import img4 from '../../assets/mobile4.png';

const DigitalMarketing = () => {
  const images = [img1, img2, img3, img4];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <div className="digital-marketing service-box">
      <h2 className="section-title">Digital Marketing</h2>
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={idx}>
            <img src={img} alt={`DM Slide ${idx + 1}`} className="carousel-image" />
          </div>
        ))}
      </Slider>
      <div className="service-description">
        <p>Boost your brand visibility and ROI with our data-driven digital marketing strategies.</p>
        <p>From SEO and content marketing to social media and paid ads, we’ve got you covered.</p>
      </div>
    </div>
  );
};

export default DigitalMarketing;
