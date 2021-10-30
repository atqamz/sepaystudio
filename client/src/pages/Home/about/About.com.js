import React from "react";

import "./about.css";

export default function About() {
  return (
    <div className='about position-relative'>
      <img src='/assets/home_knowmore.svg' alt='' className='img-fluid' />
      <div className='text-center position-absolute top-50 start-50 translate-middle'>
        <h2>Know More About Us</h2>
        <a href='/about'>
          <button className='btn btn-primary btn-lg'>Know More</button>
        </a>
      </div>
    </div>
  );
}
