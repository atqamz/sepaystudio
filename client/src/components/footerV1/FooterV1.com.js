import React from "react";
import { IconButton } from "@material-ui/core";
import * as MatIco from "@material-ui/icons";

import "./footerv1.css";

export default function FooterV1() {
  return (
    <>
      <div className='footerv1'>
        <div className='row text-center'>
          <div className='col-lg-4 text-center mb-4'>
            <img src='./assets/logo_sepay_footer.png' alt='' />
          </div>
          <div className='col-lg-4 mb-4 text-lg-start'>
            <h1>Contact Us</h1>
            <p>
              <span className='mx-2'>
                <MatIco.LocationOn />
              </span>
              Surabaya, East Java
            </p>
            <p>
              <span className='mx-2'>
                <MatIco.Email />
              </span>
              contact@sepaystudio.com
            </p>
            <p>
              <span className='mx-2'>
                <MatIco.Phone />
              </span>
              +62 812-3206-3424
            </p>
          </div>
          <div className='col-lg-4 text-lg-start social-media-icon'>
            <h2>Follow Us</h2>

            <IconButton
              href='https://id.linkedin.com/company/sepaystudio'
              target='_blank'
            >
              <MatIco.LinkedIn fontSize='large' />
            </IconButton>
            <IconButton href='https://www.instagram.com/sepaystudio/' target='_blank'>
              <MatIco.Instagram fontSize='large' />
            </IconButton>
            <IconButton href='https://twitter.com' target='_blank'>
              <MatIco.Twitter fontSize='large' />
            </IconButton>
            <IconButton href='https://facebook.com/sepaystudio/' target='_blank'>
              <MatIco.Facebook fontSize='large' />
            </IconButton>
          </div>
        </div>
      </div>
      <div className='copyright text-center'>
        <p>© Copyright 2021 Sepay Studio, All rights reserved.</p>
      </div>
    </>
  );
}
