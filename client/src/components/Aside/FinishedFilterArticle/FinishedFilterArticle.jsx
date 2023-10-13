import React, { useContext } from "react";
import { SearchProjectsContext } from "../../../context/searchProjectsContext";

const FinishedFilterArticle = () => {
  const { updateFinishedFilter } = useContext(SearchProjectsContext);

  const handleChange = (event) => {
    updateFinishedFilter(event.target.value)
  };
  return (
    <article className="filter-article">
      <h3 className="filter-heading">Finished</h3>
      <form action="" className="filter-form">
        <label htmlFor="true">
          <input
            type="radio"
            name="finished"
            id=""
            className="filter-form"
            value="true"
            onChange={handleChange}
          />
          Yes
        </label>
        <label htmlFor="false">
          <input
            type="radio"
            name="finished"
            id=""
            className="filter-form"
            value="false"
            onChange={handleChange}
          />
          Not
        </label>
      </form>
    </article>
  );
};

export default FinishedFilterArticle;
