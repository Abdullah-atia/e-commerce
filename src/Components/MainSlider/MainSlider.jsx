import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import style from "./MainSlider.module.css";
import axios from "axios";
import sliders1 from "../../assets/images/slider-image-1.jpeg";
import sliders2 from "../../assets/images/blog-img-2.jpeg";
import sliders3 from "../../assets/images/banner-4.jpeg";
import banner from "../../assets/images/blog-img-1.jpeg";
import banner1 from "../../assets/images/grocery-banner-2.jpeg";
import banner2 from "../../assets/images/slider-2.jpeg";

export default function MainSlider() {
  // let[category,setCategory]=useState(null)

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src={sliders1} alt="slider1" />
        </div>
        <div>
          <img src={sliders2} alt="slider1" />
        </div>
        <div>
          <img src={sliders3} alt="slider3" />
        </div>
        <div>
          <img src={sliders1} alt="slider6" />
        </div>
        <div>
          <img src={sliders2} alt="slider5" />
        </div>
        <div>
          <img src={sliders3} alt="slider4" />
        </div>
      </Slider>
    </div>
  );
}
