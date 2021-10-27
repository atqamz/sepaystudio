import React from "react";
import * as C from "react-bootstrap";

export default function SliderItem(props) {
  return (
    <C.Carousel.Item>
      <img className='d-block w-100 slider-img' src={props.src} alt={props.alt} />
    </C.Carousel.Item>
  );
}
