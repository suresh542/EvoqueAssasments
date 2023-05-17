import React from 'react'
import "./Header.scss"


export default function Header() {
   // var [navbarIcons,setNavbarIcons]= useState("fa-solid fa-bars")
   // var clickNavbarIcons=()=>{
   //     setNavbarIcons(navbarIcons==="fa-solid fa-bars"? "fa-solid fa-xmark":"fa-solid fa-bars")
   // }
   return (
       <div>
           <div className="mainHeader mb-4">
               <div className="container p-0">
                   <nav class="navbar navbar-expand-lg bg-none p-0">
                       <div class="container-fluid d-flex justify-content-between">
                           <a class="navbar-brand text-capitalize mainLogo" href="#Home">evoque innovative lab</a>
                           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                              {/* <i onClick={{clickNavbarIcons}}>{navbarIcons}</i> */}
                              <i class="fa-solid fa-bars"></i>
                           </button>


                           <div class="collapse navbar-collapse " id="navbarSupportedContent">
                               <ul class="navbar-nav list-unstyled ">
                                   <li class="nav-item">
                                       <a class="nav-link active" aria-current="page" href="#About">About</a>
                                   </li>
                                   <li class="nav-item">
                                       <a class="nav-link" href="#Marketplace">Marketplace</a>
                                   </li>
                                   <li class="nav-item">
                                       <a class="nav-link" href="#Resource">Resource</a>
                                   </li>
                                   <li class="nav-item">
                                       <a class="nav-link" href="#Contact">Contact</a>
                                   </li>
                               </ul>
                           </div>
                           <div className="buttons d-lg-flex" >
                               <div className="LoginBtn me-4">
                                   <button class="btn" type="submit">Login</button>
                               </div>
                               <div className="signUpBtn p-0 ">
                                   <button class="btn btn-primary " type="submit">Sign Up</button>
                               </div>
                           </div>
                       </div>
                   </nav>


               </div>
           </div>
       </div>
   )
}
