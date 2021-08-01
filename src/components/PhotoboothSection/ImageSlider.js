import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import USSECFrame from "../../Images/USSECFrame.png";

import { Img } from "./PhotoboothSection.elements";
import "./ImageSlider.css";

const ImageSlider = ({ renderSelect }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    // centerPadding: "50px"
  };
  return (
    <Slider {...settings} className="slider">
      <Img src={USSECFrame} alt="frame" onClick={renderSelect} />
      <Img src={USSECFrame} alt="frame" onClick={renderSelect} />
      <Img src={USSECFrame} alt="frame" onClick={renderSelect} />
      <Img src={USSECFrame} alt="frame" onClick={renderSelect} />
      <Img src={USSECFrame} alt="frame" onClick={renderSelect} />
    </Slider>
  );
};

export default ImageSlider;
