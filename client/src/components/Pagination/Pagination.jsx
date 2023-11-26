import { useContext, useState, useEffect, useRef } from "react";
import PreviousLink from "./PreviousLink/PreviousLink";
import NextLink from "./NextLink/NextLink";
import PageDiv from "./PageDiv/PageDiv";

const Pagination = () => {
  // variables
  const server = import.meta.env.VITE_SERVER;
  const numberOfPagesRef = useRef(1);
  // const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const tryFetch = async () => {
      const result = await fetch(`${server}/api/projects/number`);
      const data = await result.json();
      // console.log(data.count);
      // setNumberOfPages(data.count / 5);
      numberOfPagesRef.current = data.count / 5;
    };
    tryFetch();
  }, []);

  return (
    <section className="pagination-section">
      <article className="pagination-info-article">
        <p className="pagination-info-paragraph">
          Showing 1 to 10 of 13 results
        </p>
      </article>
      <article className="pagination-article">
        <PreviousLink />
        <PageDiv pageNumber={1} />
        <PageDiv pageNumber={2} />
        <PageDiv pageNumber={3} />
        <NextLink />
      </article>
    </section>
  );
};

export default Pagination;
