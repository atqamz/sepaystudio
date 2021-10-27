import React from "react";
import * as C from "react-bootstrap";

import "./slider.css";

export default function Slider() {
  return (
    <C.Carousel variant='dark'>
      <C.Carousel.Item>
        <img
          className='d-block w-100 slider-img'
          src='/assets/logo_sepay_footer@2x.png'
          alt='First slide'
        />
        <C.Carousel.Caption>
          <h5>First slide</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </C.Carousel.Caption>
      </C.Carousel.Item>

      <C.Carousel.Item>
        <img
          className='d-block w-100 slider-img'
          src='/assets/logo_sepay_footer@2x.png'
          alt='Second slide'
        />
        <C.Carousel.Caption>
          <h5>Second slide</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </C.Carousel.Caption>
      </C.Carousel.Item>
    </C.Carousel>
  );
}
