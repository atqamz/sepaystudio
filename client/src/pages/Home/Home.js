import React from "react";
import Slider from "./slider/Slider.com";
import Feature from "./feature/Feature.com";
import About from "./about/About.com";
import Testimonial from "./testimonial/Testimonial.com";
import Partner from "./partner/Partner.com";
import Footer from "../../components/footerV1/Footer.com";

export default function Home() {
  return (
    <div className='home'>
      <Slider />
      <Feature />
      <About />
      <Testimonial />
      <Partner />
      <Footer />
    </div>
  );
}
