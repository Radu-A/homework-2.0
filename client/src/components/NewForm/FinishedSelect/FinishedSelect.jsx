const FinishedSelect = ({ setIsFinished, isFinished }) => {
  const handleIsFinished = (event) => {
    setIsFinished(event.target.value);
    console.log(event.target.value);
    console.log(isFinished);
  };
  return (
    <div className="finished-div">
      <label htmlFor="finished">Finished *</label>
      <select
        name="finished"
        id="finished"
        required
        onChange={handleIsFinished}
      >
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
    </div>
  );
};

export default FinishedSelect;
