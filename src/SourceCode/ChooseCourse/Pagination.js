import React from 'react'
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
      {pages.map(
        (page, i) => {
          return (
            <button
              key={i}
              className={page === currentPage ? "active" : ""}
              onClick={() => { setCurrentPage(page) }}
              id='numbers'
            >
              {page}
            </button>
          )
        }
      )}
    </div>
  )
}
export default Pagination;