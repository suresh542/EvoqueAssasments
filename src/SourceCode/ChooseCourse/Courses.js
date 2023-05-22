import React, { useEffect, useState } from 'react';
import "./Courses.scss";
import CoursesList from './CoursesList';
import DataLists from "./CousesDetialsHere.json"
import Pagination from './Pagination';
import axios from 'axios';

export default function Courses() {
    const [coursesData, setCoursesData] = useState(DataLists);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(4);
    const [emptyArray, setEmptyArray] = useState([])

    useEffect(() => {
        async function fetch() {
            const response = await axios.get(
                "http://localhost:5000/posts"
            );

            setCoursesData(response.data);
        }

    }, [setPostPerPage]);

    useEffect(

        () => {
            setEmptyArray(allValues => [...allValues, ...coursesData]);
        }
    )

    //         setEmptyArray(allValues => [...allValues, ...coursesData]);


    // const FourStar = ()=>{
    //     setEmptyArray(coursesData.map(
    //         (props, index)=>{
    //             return(
    //                 <input key={index} Star={props.Star} />
    //             )
    //         }
    //     ))
    // }


    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentPosts = emptyArray.slice(firstPostIndex, lastPostIndex);



    return (
        <div className='CoursesMainBody'>
            <div className="row">
                <div className="col-md-3 ">
                    <div className='leftSidebar '>
                        <div className="searchBar ">
                            <form action="" className=' ps-3 d-flex'>
                                <i class="fa-solid fa-magnifying-glass p-1"></i>
                                <input type="text" className='ps-2' placeholder='Search for products' />
                            </form>
                        </div>
                        <div className="DevelopedBy mt-5">
                            <div className='filterDevelopedBy'>
                                <div className="titles">
                                    Developed by
                                </div>
                                <div className="RatiosBtn">
                                    <div className="options1 d-flex" >
                                        <input type="radio"  className='active' name='DevelopedBy' id='All' />
                                        <label htmlFor="All">All</label>
                                    </div>
                                    <div className="options2 d-flex">
                                        <input type="radio" name='DevelopedBy' id='EIL' />
                                        <label htmlFor='EIL'>Evoque Innovative Lab</label>
                                    </div>
                                    <div className="options3 d-flex">
                                        <input type="radio" name='DevelopedBy' id='Li1' />
                                        <label htmlFor='Li1'>Lorem ipsum </label>
                                    </div>
                                    <div className="options4 d-flex">
                                        <input type="radio" name='DevelopedBy' id='Li2' />
                                        <label htmlFor='Li2'>Lorem ipsum </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="RatingBy mt-4">
                            <div className='ratioBtn'>
                                <div className="RatingTitles">
                                    Rating by
                                </div>
                                <div className="RatiosBtn">
                                    <div className="options1 d-flex" >
                                        <input type="radio"  name='DevelopedBy' id='AllR' />
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
                                            <img src={"https://drive.google.com/uc?id=16lkOHg1bZHjnnMFJOcbDp_wGBEY0y3ca"} alt="" />
                                            & above
                                        </label>
                                    </div>
                                    <div className="options3 d-flex">
                                        <input type="radio" name='DevelopedBy' id='threeStar' />
                                        <label
                                            htmlFor='threeStar'
                                            value="ThreeStart"
                                        >
                                            <img src={"https://drive.google.com/uc?id=1R5oCtPnh3PdrKkUZs8ysGkeTgRBgTGYd"} alt="" />
                                            & above
                                        </label>
                                    </div>
                                    <div className="options4 d-flex">
                                        <input type="radio" name='DevelopedBy' id='twoStar' />
                                        <label
                                            htmlFor='twoStar'
                                            value="TwoStart"
                                        >
                                            <img src={"https://drive.google.com/uc?id=1uTLlIk0IJn7fR0Q8l4omr3CI4laqEwnr"} alt="" />
                                            & above
                                        </label>
                                    </div>
                                    <div className="options4 d-flex">
                                        <input type="radio" name='DevelopedBy' id='oneStar' />
                                        <label
                                            htmlFor='oneStar'
                                            value="OneStart"
                                        >
                                            <img src={"https://drive.google.com/uc?id=12xsMUI1GJ9_R9SRKrqefJQ9ZAbv0xjtt"} alt="" />
                                            & above
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Applications mt-4">
                            <div className='FilterApplicationsTypes'>
                                <div className="titles">
                                    Application Type
                                </div>
                                <div className="RatiosBtn">
                                    <div className="options1 d-flex" >
                                        <input type="radio"  name='DevelopedBy' id='AllAT' />
                                        <label htmlFor="AllAT">All</label>
                                    </div>
                                    <div className="options2 d-flex">
                                        <input type="radio" name='DevelopedBy' id='WBA' />
                                        <label htmlFor='WBA'>Web Based applications</label>
                                    </div>
                                    <div className="options3 d-flex">
                                        <input type="radio" name='DevelopedBy' id='MA' />
                                        <label htmlFor='MA'>Mobile applications  </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="col-md-9">
                    <div className="coursesDetails" >
                        <div className="filterOptions d-flex justify-content-end" >
                            <span className='p-2'>Sort by:</span>
                            <div class="dropdown ">
                                <select className="dropdownBtn" id="dropdownMenuLink">
                                    <option className='d-none' value="Select">Select by</option>
                                    <option value="Newly">Newly added</option>
                                    <option value="Popularity">Popularity</option>
                                </select>
                            </div>
                        </div>

                        <div className="courses">
                            <div className="DisplayCourses mt-5 ">
                                <CoursesList emptyArray={currentPosts} />
                            </div>
                        </div>
                    </div>
                    <div className="paginationBtn">
                        <Pagination
                            totalsPage={coursesData.length}
                            postPerPage={postPerPage}
                            setCurrentPage={setCurrentPage}
                            currentPage={currentPosts}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
