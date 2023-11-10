import React from "react";

const Pending = () => {
  return (
    <>
      <label htmlFor="">What you had left to do</label>
      <textarea
        name="pending_one"
        id="pending_one"
        cols="30"
        rows="10"
        placeholder="1"
      ></textarea>
      <textarea
        name="pending_two"
        id="pending_two"
        cols="30"
        rows="10"
        placeholder="2"
      ></textarea>
      <textarea
        name="pending_three"
        id="pending_three"
        cols="30"
        rows="10"
        placeholder="3"
      ></textarea>
    </>
  );
};

export default Pending;
