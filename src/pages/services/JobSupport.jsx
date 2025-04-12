import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/ServiceLayout.css';

import img1 from '../../assets/mobile1.png';
import img2 from '../../assets/mobile2.png';
import img3 from '../../assets/mobile3.png';
import img4 from '../../assets/mobile4.png';

const JobSupport = () => {
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
    <div className="job-support service-box">
      <h2 className="section-title">Job Support & IT Consulting</h2>
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={idx}>
            <img src={img} alt={`Job Slide ${idx + 1}`} className="carousel-image" />
          </div>
        ))}
      </Slider>
      <div className="service-description">
        <p>Facing project challenges or technical roadblocks? We offer hands-on job support to help you succeed.</p>
        <p>Our consulting services provide expert guidance to optimize your IT strategies and implementations.</p>
      </div>
    </div>
  );
};

export default JobSupport;
