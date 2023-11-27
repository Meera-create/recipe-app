import React from 'react';
import "../styles/components/_pagination.scss";

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
  let pages = [];

  for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className='pagination'>
      {
        pages.map((page, index) => {
          return <button className={page === currentPage ? 'page-number active' : 'page-number'} key={index} onClick={() => setCurrentPage(page)}>{page}</button>
        })
      }
    </div>
  )
}

export default Pagination;