import { useContext, useState } from "react";
import { SearchProjectsContext } from "../../context/searchProjectsContext";

const Pagination = () => {
  const { updatePageFilter } = useContext(SearchProjectsContext);
  const [pageNumber, setPageNumber] = useState(1);

  const chevronLeft = "<";
  const chevronRight = ">";

  const handleClick = (event) => {
    console.log(event.target.id);
    updatePageFilter(event.target.id);
  };

  return (
    <section className="pagination-section">
      <article className="pagination-info-article">
        <p className="pagination-info-paragraph">
          Showing 1 to 10 of 13 results
        </p>
      </article>
      <article className="pagination-article">
        <div className="previous-link">
          <p>{chevronLeft}</p>
        </div>
        <div className="page-link-1" id="1" onClick={handleClick}>
          1
        </div>
        <div className="page-link-2" id="2" onClick={handleClick}>
          2
        </div>
        <div className="page-link-3" id="3" onClick={handleClick}>
          3
        </div>
        <div className="next-link">{chevronRight}</div>
      </article>
    </section>
  );
};

export default Pagination;
