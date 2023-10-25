import { useContext } from "react";
import { SearchProjectsContext } from "../../../context/searchProjectsContext";

const PageDiv = ({ pageNumber }) => {
  const { updatePageFilter } = useContext(SearchProjectsContext);

  const handleClick = (event) => {
    updatePageFilter(event.target.id);
  };

  return (
    <div className="page-link-1" id={pageNumber} onClick={handleClick}>
      {pageNumber}
    </div>
  );
};

export default PageDiv;
