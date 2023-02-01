import React, { Fragment } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./CarouselStyle.css";
import { Carousel } from "react-responsive-carousel";
import pic1 from "../../assets/pic1.jpeg";
import pic2 from "../../assets/pic2.jpeg";
import pic3 from "../../assets/pic3.jpeg";

const images = [pic1, pic2, pic3];

const CarouselView = () => {
  return (
    <div className="box">
      <Carousel useKeyboardArrows={true}>
        {images.map((URL, index) => (
          <div className="slide">
            <img alt="sample_file" src={URL} key={index} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselView;
