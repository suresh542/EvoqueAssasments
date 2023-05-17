import React from 'react';
import "./RatingBy.scss"
import fourStart from "../../images/Rating options/Group4.png"
import threeStart from "../../images/Rating options/Group3.png"
import twoStart from "../../images/Rating options/Group2.png"
import oneStart from "../../images/Rating options/Group1.png"

export default function RatingBy() {
    return (
        <div className='ratioBtn'>
            <div className="RatingTitles">
                Rating by
            </div>
            <div className="RatiosBtn">
                <div className="options1 d-flex" >
                    <input type="radio" name='DevelopedBy' id='AllR' />
                    <label
                        htmlFor='AllR'
                        value="AllRating"
                        >
                        All
                    </label>
                </div>
                <div className="options2 d-flex">
                    <input type="radio" name='DevelopedBy' id='fourStar' />
                    <label
                        htmlFor='fourStar'
                        value="FourStart"
                        >
                        <img src={fourStart} alt="" />
                           & above
                    </label>
                </div>
                <div className="options3 d-flex">
                    <input type="radio" name='DevelopedBy' id='threeStar' />
                    <label
                        htmlFor='threeStar'
                        value="ThreeStart"
                        >
                        <img src={threeStart} alt="" />
                         & above
                    </label>
                </div>
                <div className="options4 d-flex">
                    <input type="radio" name='DevelopedBy' id='twoStar' />
                    <label
                        htmlFor='twoStar'
                        value="TwoStart"
                        >
                        <img src={twoStart} alt="" />
                         & above
                    </label>
                </div>
                <div className="options4 d-flex">
                    <input type="radio" name='DevelopedBy' id='oneStar' />
                    <label
                        htmlFor='oneStar'
                        value="OneStart"
                        >
                       <img src={oneStart} alt="" />
                        & above
                    </label>
                </div>
            </div>
        </div>
    )
}
