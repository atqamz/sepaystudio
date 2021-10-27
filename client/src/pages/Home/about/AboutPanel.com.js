import React from "react";

export default function AboutPanel() {
  return (
    <div className='p-2'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-3 pb-2'>
            <div className='row'>
              <div className='col-6'></div>
              <div className='col-6 shape-white'></div>
              <div className='col-6 shape-white'></div>
              <div className='col-6'></div>
            </div>
          </div>
          <div className='col-3'></div>
          <div className='col-3'></div>
          <div className='col-3 shape-white-lg'></div>
        </div>
        <div className='row'>
          <div className='col-3 shape-white-lg'></div>
          <div className='col-3'></div>
          <div className='col-3'></div>
          <div className='col-3 pt-2'>
            <div className='row'>
              <div className='col-6 shape-white'></div>
              <div className='col-6'></div>
              <div className='col-6'></div>
              <div className='col-6 shape-white'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
