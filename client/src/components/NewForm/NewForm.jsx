import React from "react";
import TypeSelect from "./TypeSelect/TypeSelect";
import FinishedSelect from "./FinishedSelect/FinishedSelect";

const NewForm = () => {
  return (
    <form action="" className="new-form">
      <label htmlFor="title">Title</label>
      <input type="text" name="title" id="title" />
      <TypeSelect />
      <label htmlFor="description"></label>
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
      ></textarea>
      <label htmlFor="img_big">Desktop screenshot (url)</label>
      <input type="text" name="img_big" id="img_big" />
      <label htmlFor="img_small">Desktop screenshot (url)</label>
      <input type="text" name="img_small" id="img_small" />
      <FinishedSelect />
    </form>
  );
};

export default NewForm;
