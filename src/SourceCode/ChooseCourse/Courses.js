import React, { useEffect, useState } from 'react';
import "./Courses.scss";
import CoursesList from './CoursesList';
import DataLists from "./CousesDetialsHere.json"
import Pagination from './Pagination';

export default function Courses() {
    const [coursesData, setCoursesData] = useState(DataLists);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(4);
    const [radios1, setRadios1] = useState("")
    const [radios2, setRadios2] = useState("")
    const [radios3, setRadios3] = useState("")
    const [radios4, setRadios4] = useState("")
    const [radios, setRadios] = useState("")
  


    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentPosts = coursesData.slice(firstPostIndex, lastPostIndex);

    
    useEffect(() => {        
        var AllData = DataLists.filter(ite => ite.data === radios1)
        setCoursesData((AllData1)=>[...AllData1,...AllData])

    },[radios1])

    useEffect(() => {
        var EIL = DataLists.filter(ite => ite.category === radios)
        setCoursesData(EIL)
    }, [radios])

    useEffect(() => {

        var Stars = DataLists.filter(ite => ite.Star === radios2)
        setCoursesData(Stars)
    }, [radios2])

    useEffect(() => {
        var Stars = DataLists.filter(ite => ite.Star === radios4)
        setCoursesData(Stars)
    }, [radios4])

    useEffect(() => {
        var ApplicationTypes = DataLists.filter(ite => ite.ApplicationType === radios3)
        setCoursesData(ApplicationTypes)
    }, [radios3])


    return (
        <div className='CoursesMainBody'>
            <div className="row">
                <div className="col-md-3 ">
                    <div className='leftSidebar '>
                        <div className="searchBar ">
                            <form action="" className=' ps-3 d-flex'>
                                <i class="fa-solid fa-magnifying-glass p-1"></i>
                                <input type="text" className='ps-2'  placeholder='Search for products' />
                            </form>
                        </div>
                        <div className="DevelopedBy mt-5">
                            <div className='filterDevelopedBy'>
                                <div className="titles">
                                    Developed by
                                </div>
                                <div className="RatiosBtn">
                                    <div className="options1 d-flex" >
                                        <input type="radio" className='active'  value={"All"} onChange={()=>{setRadios1("courses")}} name='DevelopedBy' id='All' />
                                        <label htmlFor="All">All</label>
                                    </div>
                                    <div className="options2 d-flex">
                                        <input type="radio" onChange={() => { setRadios("A") }} name='DevelopedBy' id='EIL' />
                                        <label htmlFor='EIL'>Evoque Innovative Lab</label>
                                    </div>
                                    <div className="options3 d-flex">
                                        <input type="radio" onChange={() => { setRadios("B") }} name='DevelopedBy' id='Li1' />
                                        <label htmlFor='Li1'>Lorem ipsum 1 </label>
                                    </div>
                                    <div className="options4 d-flex">
                                        <input type="radio" onChange={() => { setRadios("C") }} name='DevelopedBy' id='Li2' />
                                        <label htmlFor='Li2'>Lorem ipsum 2 </label>
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
                                        <input type="radio" onChange={()=>{setRadios1("courses")}} name='DevelopedBy' id='AllR' />
                                        <label
                                            htmlFor='AllR'
                                            value="AllRating"
                                        >
                                            All
                                        </label>
                                    </div>
                                    <div className="options2 d-flex">
                                        <input type="radio" onChange={() => { setRadios2("4") }} name='DevelopedBy' id='fourStar' />
                                        <label
                                            htmlFor='fourStar'
                                            value="FourStart"
                                        >
                                            <img src={"https://drive.google.com/uc?id=16lkOHg1bZHjnnMFJOcbDp_wGBEY0y3ca"} alt="" />
                                            & above
                                        </label>
                                    </div>
                                    <div className="options3 d-flex">
                                        <input type="radio" onChange={() => { setRadios2("3") }} name='DevelopedBy' id='threeStar' />
                                        <label
                                            htmlFor='threeStar'
                                            value="ThreeStart"
                                        >
                                            <img src={"https://drive.google.com/uc?id=1R5oCtPnh3PdrKkUZs8ysGkeTgRBgTGYd"} alt="" />
                                            & above
                                        </label>
                                    </div>
                                    <div className="options4 d-flex">
                                        <input type="radio" onChange={() => { setRadios2("2") }} name='DevelopedBy' id='twoStar' />
                                        <label
                                            htmlFor='twoStar'
                                            value="TwoStart"
                                        >
                                            <img src={"https://drive.google.com/uc?id=1uTLlIk0IJn7fR0Q8l4omr3CI4laqEwnr"} alt="" />
                                            & above
                                        </label>
                                    </div>
                                    <div className="options4 d-flex">
                                        <input type="radio" onChange={() => { setRadios2("1") }} name='DevelopedBy' id='oneStar' />
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
                                        <input type="radio" name='DevelopedBy' value="All" onChange={()=>{setRadios1("courses")}} id='AllAT' />
                                        <label htmlFor="AllAT">All</label>
                                    </div>
                                    <div className="options2 d-flex">
                                        <input type="radio" name='DevelopedBy' onChange={() => { setRadios3("webBasedApplications") }} id='WBA' />
                                        <label htmlFor='WBA'>Web Based applications</label>
                                    </div>
                                    <div className="options3 d-flex">
                                        <input type="radio" name='DevelopedBy' onChange={() => { setRadios3("mobileBasedApplications") }} id='MA' />
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
                                <select className="dropdownBtn" id="dropdownMenuLink" onChange={()=>{setRadios4("4")}} >
                                    <option className='d-none' value="Select">Select by</option>
                                    <option value="Newly" >Newly added</option>
                                    <option value="Popularity" type="button" >Popularity</option>
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
            </div>
        </div>
    )
}
