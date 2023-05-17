import React from 'react'

export default function Courses() {
    return (
        <div className='CoursesMainBody'>
            <div className="filterOptions">
            <span>Sort by:</span>
                <div class="dropdown">
                    <a class="btn btn-secondary dropdown-toggle" href="#D" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown link
                    </a>

                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><a class="dropdown-item" href="#N">Action</a></li>
                        <li><a class="dropdown-item" href="#O">Another action</a></li>
                        <li><a class="dropdown-item" href="#Popular">Something else here</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
