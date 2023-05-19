import React from 'react'
import "./CoursesList.scss"
import DisplayCourses from './DisplayCourses'

const CoursesList = ({ coursesData }) => {

    return (
        <div>
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
                        />
                    )
                }
            )}

        </div>
    )
}
export default CoursesList


//