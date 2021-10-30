import React from "react";
import * as C from "react-bootstrap";

import "./slider.css";

export default function Slider() {
  return (
    <C.Carousel variant='dark'>
      <C.Carousel.Item>
        <img
          className='d-block w-100 img-fluid slider-img'
          src='/assets/logo_sepay_footer@2x.png'
          alt='First slide'
        />
      </C.Carousel.Item>

      <C.Carousel.Item>
        <img
          className='d-block w-100 img-fluid slider-img'
          src='/assets/logo_sepay_footer@2x.png'
          alt='Second slide'
        />
      </C.Carousel.Item>
    </C.Carousel>
  );
}
