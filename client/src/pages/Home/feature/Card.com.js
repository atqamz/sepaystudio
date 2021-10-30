import React from "react";
import CardOffer from "./CardOffer.com";

export default function Card(props) {
  return (
    <div className='card mx-3 my-5 position-relative'>
      <img
        src={props.src}
        alt={props.alt}
        className='card-image position-absolute start-50 translate-middle'
      />
      <div className='card-body text-center card-detail'>
        <h2>{props.title}</h2>
        <p>What We Offers</p>
        <div className='text-start'>
          <CardOffer value='Simulate true experience for your product' />
          <CardOffer value='Branding various industry through visualisation' />
          <CardOffer value='Bring product to real life' />
          <CardOffer value='Education and training simulation tools' />
          <CardOffer value='Navigation & Routes solution' />
          <CardOffer value='Entertaiment' />
        </div>
      </div>
    </div>
  );
}
