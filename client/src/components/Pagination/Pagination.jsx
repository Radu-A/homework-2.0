import { useContext, useState, useEffect, useRef } from "react";
import { SearchProjectsContext } from "../../context/searchProjectsContext";
import PreviousLink from "./PreviousLink/PreviousLink";
import NextLink from "./NextLink/NextLink";

const Pagination = () => {
  const { updatePageFilter } = useContext(SearchProjectsContext);
  const numberOfPagesRef = useRef(1);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const tryFetch = async () => {
      const result = await fetch("http://localhost:3000/api/projects/number");
      const data = await result.json();
      console.log(data.count);
      // setNumberOfPages(data.count / 5);
      numberOfPagesRef.current = data.count / 5
    };
    tryFetch();
  }, []);

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
        <PreviousLink />
        <NextLink />
      </article>
    </section>
  );
};

export default Pagination;
