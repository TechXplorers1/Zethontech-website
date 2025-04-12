import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/ServiceLayout.css';

import img1 from '../../assets/mobile1.png';
import img2 from '../../assets/mobile2.png';
import img3 from '../../assets/mobile3.png';
import img4 from '../../assets/mobile4.png';

const ITTalentSupply = () => {
  const images = [img1, img2, img3, img4];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="it-talent-supply service-box">
      <h2 className="section-title">IT Talent Supply</h2>
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={idx}>
            <img src={img} alt={`Talent Slide ${idx + 1}`} className="carousel-image" />
          </div>
        ))}
      </Slider>
      <div className="service-description">
        <p>Get access to top-tier tech talent tailored to your project and organizational needs.</p>
        <p>We offer vetted, skilled, and dependable professionals for short-term or long-term roles.</p>
      </div>
    </div>
  );
};

export default ITTalentSupply;
