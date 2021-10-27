import React from "react";
import * as C from "react-bootstrap";

import "./testimonial.css";

const testimonials = [
  {
    id: 1,
    src: "/assets/sepaylogo.png",
    alt: "Testimonial",
    name: "Atqa Munzir",
    company: "Client Company",
    review:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren",
  },
  {
    id: 2,
    src: "/assets/sepaylogo.png",
    alt: "Testimonial",
    name: "Ade Hardiansyah",
    company: "Client Company",
    review:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren",
  },
  {
    id: 3,
    src: "/assets/sepaylogo.png",
    alt: "Testimonial",
    name: "Savilla Tifania Mahadewi",
    company: "Client Company",
    review:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren",
  },
];

export default function Testimonial() {
  return (
    <div className='testimonial'>
      <h1 className='fs-1 text-center'>What Our Client Said</h1>
      <C.Carousel variant='dark'>
        {testimonials.map((testimonial) => {
          return (
            <C.Carousel.Item>
              <div className='card testimonial-list'>
                <div class='row d-flex align-items-center'>
                  <div class='col-lg-2 text-center'>
                    <C.Image
                      rounded
                      src={testimonial.src}
                      alt={testimonial.alt}
                      width='128'
                      height='128'
                    />
                  </div>
                  <div class='col-lg-10'>
                    <div class='text-lg-start text-center'>
                      <h1>{testimonial.name}</h1>
                      <p>{testimonial.company}</p>
                      <p>{testimonial.review}</p>
                    </div>
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
