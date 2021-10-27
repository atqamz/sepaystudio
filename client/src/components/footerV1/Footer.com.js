import React from "react";
import * as MatIco from "@material-ui/icons";

import "./footer.css";

export default function Footer() {
  return (
    <>
      <div className='footer'>
        <div className='row'>
          <div className='col-lg-4 text-center'>
            <img src='./assets/logo_sepay_footer.png' alt='' />
          </div>
          <div className='col-lg-4'>
            <div className='text-start'>
              <h1>Contact Us</h1>
              <p>Address:</p>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr
              </p>
              <p className='d-flex'>
                <span className='mx-2'>
                  <MatIco.Email />
                </span>
                {"contact@sepaystudio.com"}
              </p>
              <p className='d-flex'>
                <span className='mx-2'>
                  <MatIco.Phone />
                </span>
                {"+628 1234 5678"}
              </p>
            </div>
          </div>
          <div className='col-lg-4'>
            <h2>Follow Us</h2>

            <a href='https://linkedin.com'>
              <button className='social-media-icon mx-1'>
                <MatIco.LinkedIn fontSize='large' />
              </button>
            </a>

            <a href='https://instagram.com'>
              <button className='social-media-icon mx-1'>
                <MatIco.Instagram fontSize='large' />
              </button>
            </a>

            <a href='https://twitter.com'>
              <button className='social-media-icon mx-1'>
                <MatIco.Twitter fontSize='large' />
              </button>
            </a>

            <a href='https://facebook.com'>
              <button className='social-media-icon mx-1'>
                <MatIco.Facebook fontSize='large' />
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className='copyright text-center'>
        <p>© Copyright 2021 Sepay Studio, All rights reserved.</p>
      </div>
    </>
  );
}
