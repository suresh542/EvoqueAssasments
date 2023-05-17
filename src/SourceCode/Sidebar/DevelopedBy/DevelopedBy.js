import React from 'react';
import "./DevelopedBy.scss"

export default function DevelopedBy() {
  return (
    <div className='filterDevelopedBy'>
    <div className="titles">
      Developed by
    </div>
        <div className="RatiosBtn">
              <div className="options1 d-flex" >
                <input type="radio" name='DevelopedBy' id='All'/>
                <label htmlFor="All">All</label>
              </div>
              <div className="options2 d-flex">
                <input type="radio" name='DevelopedBy' id='EIL'/>
                <label htmlFor='EIL'>Evoque Innovative Lab</label>
              </div>
              <div className="options3 d-flex">
                <input type="radio" name='DevelopedBy' id='Li1'/>
                <label htmlFor='Li1'>Lorem ipsum </label>
              </div>
              <div className="options4 d-flex">
                <input type="radio" name='DevelopedBy' id='Li2'/>
                <label htmlFor='Li2'>Lorem ipsum </label>
              </div>
        </div>
    </div>
  )
}
