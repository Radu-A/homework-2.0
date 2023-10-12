import React from "react";

const FinishedFilterArticle = () => {
  return (
    <article className="filter-article">
      <h3 className="filter-heading">Finished</h3>
      <form action="" className="filter-form">
        <label htmlFor="true">
          <input type="radio" name="finished" id="" className="filter-form" value='true' />Yes
        </label>
        <label htmlFor="false">
          <input type="radio" name="finished" id="" className="filter-form" value="false" />Not
        </label>
      </form>
    </article>
  );
};

export default FinishedFilterArticle;
