import React from "react";

const Pagination = ({ postsPerPage, totalPosts,paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
console.log("inside pagintion");
  return (
    <nav>
      <ul className="navigation">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item" >
              <button onClick={()=>paginate(number)}> {number} </button>
              {/* <a href="!#" onClick={()=>paginate(number)}>
              {number}
              </a> */}
            
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
