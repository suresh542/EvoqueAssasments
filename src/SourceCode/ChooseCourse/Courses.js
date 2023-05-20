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

    useEffect(() => {
        async function fetch() {
            const response = await axios.get(
                "http://localhost:5000/posts"
            );

            setCoursesData(response.data);
        }

    }, []);


    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentPosts = coursesData.slice(firstPostIndex, lastPostIndex);
    return (
        <div className='CoursesMainBody'>
            <div className="coursesDetails" >
                <div className="filterOptions d-flex justify-content-end" >
                    <span className='p-2'>Sort by:</span>
                    <div class="dropdown ">
                        <select className="dropdownBtn" id="dropdownMenuLink">
                            <option className='d-none' value="Select">Select by</option>
                            <option value="Newly">Newly added</option>
                            <option value="Popularity">Popularity</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>
                <div className="courses">
                    <div className="DisplayCourses mt-5 ">
                        <CoursesList coursesData={currentPosts} />
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
    )
}
