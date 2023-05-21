import React from 'react'
import "./CoursesList.scss"
import DisplayCourses from './DisplayCourses'

const CoursesList = ({ coursesData }) => {

    return (
        <div className='listOfCourses ms-md-5 ps-md-5'>
            {coursesData.map(
                (props, index) => {
                    return (
                        <DisplayCourses
                            key={index}
                            images={props.images}
                            CardsTitle={props.titles}
                            cardsCats={props.infos}
                            prices={props.price}
                            OfferPrices={props.offerPrices}
                            RatingImage={props.RatingImage}
                            ReviewCount={props.Reviews}
                            free={props.free}
                        />
                    )
                }
            )}

        </div>
    )
}
export default CoursesList


//