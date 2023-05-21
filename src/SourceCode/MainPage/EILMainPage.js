import React from 'react'
import "./EILMainPage.scss"
import Header from "../Header/Header"
import Footer from '../Footer/Footer'
import LeftSideBar from '../Sidebar/LeftSideBar'
import Courses from '../ChooseCourse/Courses'


export default function EILMainPage() {
  
 return (
   <div className='mainPage'>


     {/* Header File */}
     <div className="header mt-3 mb-2">
       <Header />
     </div>


     {/* Welcome to marketplace */}
     <div className="container mt-3">
       <div className="marketPlace">
         <section className="ImageContent d-flex justify-content-center" id="" >
           <div className="" id="">
             <h2>
               Welcome to <span>marketplace&#33;</span>
             </h2>
             <div className='mt-5'>
               India's first products marketplace with <br /> advanced tool  &amp; apps to empower your every trade&#33;
             </div>
           </div>
         </section>
       </div>
     </div>


     <div className="container pt-5 mb-5">
       <div className="row">
         <div className="col-md-3 leftSideBar" >
           <LeftSideBar />
         </div>
         <div className="col-md-9">
             <Courses/>
         </div>
       </div>
     </div>

     <div className="footer">
       <Footer/>
     </div>
   </div>
 )
}
