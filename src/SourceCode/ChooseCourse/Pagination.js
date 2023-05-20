import React, {useState}from 'react'
import "./pagination.scss"

const Pagination = ({
  totalsPage,
  postPerPage,
  setCurrentPage,
  currentPage,

}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalsPage / postPerPage); i++) {
    pages.push(i)
  }
   

  return (
    <div className='pagination m-3'>
    <button><i class="fa-solid fa-angle-left"></i></button>
      {pages.map(
        (page, i) => {
          return (
            <button
              key={i}
              className={page === currentPage ? "active" : ""}
              onClick={() => { setCurrentPage(page) }}
            >
              {page}
            </button>
          )
        }
      )}
      <button><i class="fa-solid fa-angle-right"></i></button>
    </div>
  )
}
export default Pagination;