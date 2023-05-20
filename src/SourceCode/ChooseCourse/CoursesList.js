import React from 'react'
import "./CoursesList.scss"
import DisplayCourses from './DisplayCourses'

const CoursesList = ({ coursesData }) => {

    return (
        <div className='listOfCourses'>
            {coursesData.map(
                (props, index) => {
                    return (
                        <DisplayCourses
                            key={index}
                            images={props.image}
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