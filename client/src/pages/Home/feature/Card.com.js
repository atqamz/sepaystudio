import React from "react";
import Button from "./Button.com";
import CardOffer from "./CardOffer.com";

export default function Card(props) {
  return (
    <div className='card mx-3 my-5'>
      <img src={props.src} alt={props.alt} className='card-image' />
      <div className='card-body text-center'>
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
        <Button to={props.to} />
      </div>
    </div>
  );
}
