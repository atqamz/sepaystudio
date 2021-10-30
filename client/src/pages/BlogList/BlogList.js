import React from "react";
import "./BlogList.css";

import Footer from "../../components/footerV2/FooterV2.com";

export default function BlogList() {
  return (
    <>
      <div className='blog-list'>
        <img src='/assets/blog_header.svg' alt='' className='img-fluid w-100' />
      </div>
      <Footer />
    </>
  );
}
