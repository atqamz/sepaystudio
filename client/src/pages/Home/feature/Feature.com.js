import React from "react";
import Card from "./Card.com";

import "./feature.css";

export default function Feature() {
  return (
    <div className='feature container px-5'>
      <h1 className='text-center fs-1'>What We Good At</h1>
      <div className='feature-item row g-0'>
        <div className='col-lg-4'>
          <Card
            src='/assets/gamification.svg'
            title='Gamification'
            alt='Gamification'
            to='/products/gamification'
          />
        </div>
        <div className='col-lg-4'>
          <Card
            src='/assets/arvr.svg'
            title='AR & VR'
            alt='AR & VR'
            to='/products/arvr'
          />
        </div>
        <div className='col-lg-4'>
          <Card src='/assets/game.svg' title='Game' alt='Game' to='/products/game' />
        </div>
      </div>
    </div>
  );
}
