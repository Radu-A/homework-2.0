import React, { useContext } from "react";
import { SearchProjectsContext } from "../../../context/searchProjectsContext";

const DeployedFilterArticle = () => {
  const { updateDeployedFilter } = useContext(SearchProjectsContext);
  const handleChange = (event) => {
    updateDeployedFilter(event.target.value);
  };
  return (
    <article className="filter-article">
      <h3 className="filter-heading">Deployed</h3>
      <form action="" className="filter-form">
        <label htmlFor="true">
          <input
            type="radio"
            name="deployed"
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
            name="deployed"
            id=""
            className="filter-form"
            value="false"
            onChange={handleChange}
          />
          Not
        </label>
        <label htmlFor="true">
          <input
            type="radio"
            name="deployed"
            id=""
            className="filter-form"
            value="all"
            onChange={handleChange}
          />
          All
        </label>
      </form>
    </article>
  );
};

export default DeployedFilterArticle;
