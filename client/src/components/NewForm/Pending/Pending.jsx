import React from "react";

const Pending = () => {
  return (
    <>
      <label htmlFor="">What you had left to do</label>
      <textarea
        name="pending-1"
        id="pending-1"
        cols="30"
        rows="10"
        placeholder="1"
      ></textarea>
      <textarea
        name="pending-2"
        id="pending-2"
        cols="30"
        rows="10"
        placeholder="2"
      ></textarea>
      <textarea
        name="pending-3"
        id="pending-3"
        cols="30"
        rows="10"
        placeholder="3"
      ></textarea>
    </>
  );
};

export default Pending;
