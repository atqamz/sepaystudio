import React from "react";
import "./About.css";

import Footer from "../../components/footerV1/Footer.com";

export default function About() {
  return (
    <div className='about'>
      <div className='position-relative'>
        <img className='img-fluid w-100' src='/assets/about_header.png' alt='' />
        <div className='about-header position-absolute'>
          <h1 className='fw-bold about-title'>Bring The Joy of Creatifity</h1>
          <p className='mt-4'>Lorem ipsum dolor sit amet</p>
        </div>
      </div>
      <div className='py-5'>
        <div className='container'>
          <h1 className='text-center'>About Us</h1>
          <p>
            Sepay Studio is a Creative Studio based on Gamification Service and Game
            Product. It has been running since 2017. We started from a group of students
            who aim to become a study group. Seeing the growing potential of the creative
            and digital industries, Sepay Studio has continued to develop itself and try
            to create various innovations in the fields of gamification and games. We
            always try to reach out all your dreams come true with incredible technology.
            Besides the creativity, we also bring joy and happiness to each of our works.
          </p>
        </div>
      </div>
      <div className='py-5 why-work-with-us'>
        <div className='container'>
          <h1 className='text-center'>Why Work With Us</h1>
          <div className='row d-flex align-content-end flex-wrap'>
            <div className='col-md-6 mb-3'>
              <img
                src='/assets/about_icon_adapt.svg'
                alt=''
                className='img-fluid w-100'
              />
            </div>
            <div className='col-md-6 mb-3'>
              <img
                src='/assets/about_icon_agile.svg'
                alt=''
                className='img-fluid w-100'
              />
            </div>
            <div className='col-md-6 mb-3'>
              <img
                src='/assets/about_icon_collaborate.svg'
                alt=''
                className='img-fluid w-100'
              />
            </div>
            <div className='col-md-6'>
              <img
                src='/assets/about_icon_creative.svg'
                alt=''
                className='img-fluid w-100'
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
