import React from 'react'

const Pagination1 = (totalPages, postPer) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPages / postPer); i++) {
        pages.push(i);
    }

    return (
        <div>
            {pages.map((page, index) => {
                return (
                    <div>
                        <button
                            key={index}
                            onClick={() => setCurrentPage(page)}
                            className={page === currentPage ? "active" : ""}
                        >
                            {page}
                        </button>;
                    </div>)
            })}

        </div>
    )
}
export default Pagination1;