import React from "react";

const FinishedSelect = () => {
  return (
    <div className="finished-div">
      <label htmlFor="finished">Finished</label>
      <select name="finished" id="finished" required>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
    </div>
  );
};

export default FinishedSelect;
