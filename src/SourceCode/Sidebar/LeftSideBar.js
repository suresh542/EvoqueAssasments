import React from 'react';
import "./LeftSideBar.scss"
import DevelopedBy from './DevelopedBy/DevelopedBy';
import RatingBy from './Rating By/RatingBy';
import ApplicationType from './ApplicationsType/ApplicationType';

export default function LeftSideBar() {
    return (
        <div className='leftSidebar '>
            <div className="searchBar ">
                <form action="" className=' ps-3 d-flex'>
                    <i class="fa-solid fa-magnifying-glass p-1"></i>
                    <input type="text" className='ps-2' placeholder='Search for products' />
                </form>
            </div>
            <div className="DevelopedBy mt-5">
                <DevelopedBy/>
            </div>
            <div className="RatingBy mt-4">
                <RatingBy/>
            </div>
            <div className="Applications mt-4">
                <ApplicationType/>
            </div>
        </div>
    )
}
