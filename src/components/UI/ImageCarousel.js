import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import classes from "./ImageCarousel.module.css";

const ImageCarousel = (props) => {
  return (
    <Carousel showStatus={false} showThumbs={false} showIndicators={false}>
      {props.children}
    </Carousel>
  );
};

export default ImageCarousel;
