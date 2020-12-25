import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../assets/img/h4-slide.png";
import img2 from "../assets/img/h4-slide2.png";
import img3 from "../assets/img/h4-slide3.png";
import img4 from "../assets/img/h4-slide4.png";

const carousel = (props) => {
  const imageUrls = [img1, img2, img3, img4];
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <Carousel
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          dynamicHeight={true}
        >
          {imageUrls.map((url, index) => (
            <div key={index}>
              <img src={url} alt="carousel" />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default carousel;
