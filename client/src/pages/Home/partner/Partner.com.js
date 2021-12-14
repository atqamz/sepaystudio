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
  let i,
    temp,
    chunk = 3;
  const newPartners = [];
  for (i = 0; i < partners.length; i += chunk) {
    temp = partners.slice(i, i + chunk);
    newPartners.push(temp);
  }

  return (
    <div className='partner'>
      <h1 className='fs-1 text-center'>Our Partners</h1>
      <C.Carousel variant='dark'>
        {newPartners.map((partner) => {
          return (
            <C.Carousel.Item>
              <div className='partner-list'>
                <div class='row d-flex align-items-center'>
                  <div class='col text-center'>
                    {partner.map((each) => {
                      return (
                        <C.Image
                          className='mx-5 my-5'
                          rounded
                          src={each}
                          alt=''
                          width='96'
                          height='96'
                        />
                      );
                    })}
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
