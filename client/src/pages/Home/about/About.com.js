import React from "react";
import AboutPanel from "./AboutPanel.com";

import "./about.css";

export default function About() {
  return (
    <div className='about'>
      <div className='about-item text-center'>
        <h2>Know More About Us</h2>
        <a href='/about'>
          <button className='btn btn-primary btn-lg'>Know More</button>
        </a>
      </div>
      <AboutPanel />
    </div>
  );
}
