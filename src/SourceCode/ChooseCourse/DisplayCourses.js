import React from 'react'
import "./DisplayCourses.scss"
import Images1 from "../images/CourseImages/image.jpg"

export default function DisplayCourses(props) {


  return (
    <div className='DisplayCourses w-100 '  >
      <div className="cards " id="">
        <div className="card " id="" >
          <img src={Images1} id="" href="s" alt="" className="card_img" />
          {/* <button className='btn btn-danger offerInfo'>{props.free}</button> */}
          <span className='offerInfo'>{props.free}</span>
          <div className='RatingAndReviews pb-1 d-flex'>
            <img src={props.RatingImage} alt="" className='' />
            <div className="reviews ps-1">
              (
              {props.ReviewCount} reviews
              )
            </div>
          </div>
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
                <span>Offer price: </span> <span className='offerPrice'>{props.OfferPrices}</span>  <span>  for customers</span>
              </div>
              <div className="buttonsHere d-flex justify-content-between">
                <a href={"#ViewMoreDetails"} >
                  <button className="btn btn-primary mt-4" type="submit" id="">
                    View More Details
                  </button>
                </a>
                <a href={"#OpenAnAccount"} >
                  <button className="btn mt-4 OpenAnAccountBtn" type="submit" id="">
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
