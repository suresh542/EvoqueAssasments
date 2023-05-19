import React from 'react'
import "./DisplayCourses.scss"
import Images1 from "../images/CourseImages/image.jpg"

export default function DisplayCourses(props) {


  return (
    <div className='DisplayCourses' >
      <div className="cards" id="">
        <div className="card" id="" >
          <img src={Images1} id="" href="s" alt="" className="card_img" />
          <button className='btn btn-success offerInfo'>free</button>
          <div className="details mt-2 p-4">
            <h3 className="cardTitle" id="">
              {props.CardsTitle}
            </h3>
            <div className="card_info " id="">
              <span className="card-cat " id="sName">
                 {props.cardsCats}
              </span>
              <div className='mt-4'>
                <span className='Price'>Price: &#8377; {props.prices}</span> <span> per small case(buy)</span>
              </div>
              <div className='mt-2'>
                <span>Offer price: </span> <span className='offerPrice text-ca'>{props.OfferPrices}</span> <span>  for customers</span>
              </div>
              <div className="buttonsHere d-flex justify-content-between">
                <a href={"s"} >
                  <button className="btn btn-primary mt-4" id="">
                    View More Details
                  </button>
                </a>
                <a href={"s"} >
                  <button className="btn mt-4 OpenAnAccountBtn" id="">
                    Open an Account
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
