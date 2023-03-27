import { useState } from "react";

const Pagination = ({products, page, setPage}) => {
  
  const selectedPagehandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= products.length / 12 &&
      selectedPage !== page
    )
      setPage(selectedPage);
  };

  return (
    <>
    {
     
      products.length > 0 && (
      <div className="pagination">
        <span
        className={page > 1 ? "" : "disable_button"}
         onClick={() => selectedPagehandler(page - 1)}>⏮️</span>
        {[...Array(products.length / 12)].map((_, i) => {
          return (
            <span
              className={page === i + 1 ? "page__selected" : ""}
              onClick={() => selectedPagehandler(i + 1)}
            >
              {i + 1}
            </span>
          );
        })}
        <span
          className={page < products.length / 12 ? "" : "disable_button"}
          onClick={() => selectedPagehandler(page + 1)}
        >
          ⏭️
        </span>
      </div>
    )
  }
  </>
  )
}

export default Pagination