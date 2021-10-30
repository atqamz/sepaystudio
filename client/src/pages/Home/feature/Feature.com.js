import React from "react";
import Card from "./Card.com";

import "./feature.css";

export default function Feature() {
  return (
    <div className='container px-5 mt-4'>
      <h1 className='text-center fs-1 mb-5'>What We Good At</h1>
      <div className='row'>
        <div className='col-lg-4 card-spacer'>
          <Card
            src='/assets/gamification.svg'
            title='Gamification'
            alt='Gamification'
            to='/products/gamification'
          />
        </div>
        <div className='col-lg-4 card-spacer'>
          <Card
            src='/assets/arvr.svg'
            title='AR & VR'
            alt='AR & VR'
            to='/products/arvr'
          />
        </div>
        <div className='col-lg-4 card-spacer'>
          <Card src='/assets/game.svg' title='Game' alt='Game' to='/products/game' />
        </div>
      </div>
    </div>
  );
}
