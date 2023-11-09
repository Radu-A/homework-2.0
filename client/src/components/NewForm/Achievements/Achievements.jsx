import React from "react";

const Achievements = () => {
  return (
    <>
      <label htmlFor="">The achievements you are proud of</label>
      <textarea
        name="achievement-1"
        id="achievement-1"
        cols="30"
        rows="10"
        placeholder="1"
        required
      ></textarea>
      <textarea
        name="achievement-2"
        id="achievement-2"
        cols="30"
        rows="10"
        placeholder="2"
        required
      ></textarea>
      <textarea
        name="achievement-3"
        id="achievement-3"
        cols="30"
        rows="10"
        placeholder="3"
        required
      ></textarea>
    </>
  );
};

export default Achievements;
