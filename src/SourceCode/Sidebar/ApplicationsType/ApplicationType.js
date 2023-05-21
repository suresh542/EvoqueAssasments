import React from 'react'
import "./ApplicationType.scss"

export default function ApplicationType() {
  


  return (
    <div className='FilterApplicationsTypes'>
            <div className="titles">
                Application Type
            </div>
            <div className="RatiosBtn">
              <div className="options1 d-flex" >
                <input type="radio" name='DevelopedBy' id='AllAT'/>
                <label htmlFor="AllAT">All</label>
              </div>
              <div className="options2 d-flex">
                <input type="radio" name='DevelopedBy' id='WBA'/>
                <label htmlFor='WBA'>Web Based applications</label>
              </div>
              <div className="options3 d-flex">
                <input type="radio" name='DevelopedBy' id='MA'/>
                <label htmlFor='MA'>Mobile applications  </label>
              </div>
        </div>
    </div>
  )
}
