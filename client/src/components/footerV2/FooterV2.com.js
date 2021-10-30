import React from "react";
import * as MatIco from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import "./footerv2.css";

export default function Footer() {
  return (
    <div className='footerv2'>
      <div className='row container-fluid text-center'>
        <div className='col-md-4 text-md-start'>
          <p>
            <span className='mx-2'>
              <MatIco.Email />
            </span>
            contact@sepaystudio.com
          </p>
        </div>
        <div className='col-md-4'>
          <IconButton href='https://id.linkedin.com/company/sepaystudio' target='_blank'>
            <MatIco.LinkedIn />
          </IconButton>
          <IconButton href='https://www.instagram.com/sepaystudio/' target='_blank'>
            <MatIco.Instagram />
          </IconButton>
          <IconButton href='https://twitter.com' target='_blank'>
            <MatIco.Twitter />
          </IconButton>
          <IconButton href='https://facebook.com/sepaystudio/' target='_blank'>
            <MatIco.Facebook />
          </IconButton>
        </div>
        <div className='col-md-4 text-md-end'>
          <p>© Copyright 2021 Sepay Studio, All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
