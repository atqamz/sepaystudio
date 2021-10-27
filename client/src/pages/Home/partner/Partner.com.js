import React from "react";
import * as C from "react-bootstrap";

import "./partner.css";

const partners = [
  "/assets/sepaylogo.png",
  "/assets/sepaylogo.png",
  "/assets/sepaylogo.png",
  "/assets/sepaylogo.png",
  "/assets/sepaylogo.png",
  "/assets/sepaylogo.png",
  "/assets/sepaylogo.png",
  "/assets/sepaylogo.png",
  "/assets/sepaylogo.png",
  "/assets/sepaylogo.png",
];

export default function Partner() {
  return (
    <div className='partner'>
      <h1 className='fs-1 text-center'>Our Partners</h1>
      <C.Carousel variant='dark'>
        {partners.map((partner) => {
          return (
            <C.Carousel.Item>
              <div className='partner-list'>
                <div class='row d-flex align-items-center'>
                  <div class='col text-center'>
                    <C.Image rounded src={partner} alt='' width='96' height='96' />
                  </div>
                </div>
              </div>
            </C.Carousel.Item>
          );
        })}
      </C.Carousel>
    </div>
  );
}
