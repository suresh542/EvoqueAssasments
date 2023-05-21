import React, { useState } from 'react';
import "./Header.scss";


export default function Header() {

       const [navbarIcons,setNavbarIcons]= useState(false);

    
    return (
        <div>
            <div className="mainHeader mb-4">
                <div className="container p-0">
                    <nav class="navbar navbar-expand-lg bg-none p-0">
                        <div class="container-fluid d-flex justify-content-between">
                            <a class="navbar-brand text-capitalize mainLogo" href="#Home">evoque innovative lab</a>
                            <button class="navbar-toggler" onClick={()=>{setNavbarIcons(!navbarIcons)}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                {navbarIcons ? (
                                    <i className="fas fa-times"></i>
                                ) : (
                                    <i className="fa-solid fa-bars"></i>
                                )}
                            </button>

                            <div class="collapse navbar-collapse " id="navbarSupportedContent">
                                <ul class="navbar-nav list-unstyled ">
                                    <li class="nav-item">
                                        <a class="nav-link " aria-current="page" href="#About">About</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link active" href="#Marketplace">Marketplace</a>
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

