import React from "react";

const DeployedFilterArticle = () => {
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
          />
        </label>
        <label htmlFor="false">
          <input
            type="radio"
            name="deployed"
            id=""
            className="filter-form"
            value="false"
          />
        </label>
      </form>
    </article>
  );
};

export default DeployedFilterArticle;
