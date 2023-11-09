import React from "react";

const FinishedSelect = () => {
  return (
    <>
      <label htmlFor="finished"></label>
      <select name="finished" id="finished">
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
    </>
  );
};

export default FinishedSelect;
