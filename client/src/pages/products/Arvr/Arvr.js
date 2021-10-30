import React from "react";
import * as C from "react-bootstrap";
import "../Products.css";
import "./Arvr.css";

import Footer from "../../../components/footerV2/FooterV2.com";

export default function Arvr() {
  return (
    <div className='arvr'>
      <img src='/assets/arvr_header.svg' alt='' className='arvr-header img-fluid w-100' />
      <div className='container-fluid'>
        <div className='products-left row p-5'>
          <div className='product-slider col-lg-5 mb-5'>
            <C.Carousel variant='dark'>
              <C.Carousel.Item>
                <img
                  className='d-block w-100 img-fluid slider-img'
                  src='/assets/logo_sepay_footer@2x.png'
                  alt='First slide'
                />
              </C.Carousel.Item>

              <C.Carousel.Item>
                <img
                  className='d-block w-100 img-fluid slider-img'
                  src='/assets/logo_sepay_footer@2x.png'
                  alt='Second slide'
                />
              </C.Carousel.Item>
            </C.Carousel>
          </div>
          <div className='col-lg-7'>
            <div className='d-flex flex-column'>
              <img
                src='/assets/sepaylogo.png'
                alt=''
                className='img-fluid'
                width='64'
                height='64'
              />
              <h1>Product Name</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
              </p>
              <div className='d-flex'>
                <a href='https://play.google.com/' className='me-3'>
                  <img src='/assets/icon_playstore.svg' alt='' width='180' height='60' />
                </a>
                <a href='https://www.apple.com/id/app-store/'>
                  <img src='/assets/icon_appstore.svg' alt='' width='180' height='60' />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='products-right row p-5'>
          <div className='col-lg-7 mb-5'>
            <div className='d-flex flex-column'>
              <img
                src='/assets/sepaylogo.png'
                alt=''
                className='img-fluid'
                width='64'
                height='64'
              />
              <h1>Product Name</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
              </p>
              <div className='d-flex'>
                <a href='https://play.google.com/' className='me-3'>
                  <img src='/assets/icon_playstore.svg' alt='' width='180' height='60' />
                </a>
                <a href='https://www.apple.com/id/app-store/'>
                  <img src='/assets/icon_appstore.svg' alt='' width='180' height='60' />
                </a>
              </div>
            </div>
          </div>
          <div className='product-slider col-lg-5'>
            <C.Carousel variant='dark'>
              <C.Carousel.Item>
                <img
                  className='d-block w-100 img-fluid slider-img'
                  src='/assets/logo_sepay_footer@2x.png'
                  alt='First slide'
                />
              </C.Carousel.Item>

              <C.Carousel.Item>
                <img
                  className='d-block w-100 img-fluid slider-img'
                  src='/assets/logo_sepay_footer@2x.png'
                  alt='Second slide'
                />
              </C.Carousel.Item>
            </C.Carousel>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
