const FinishedSelect = ({ finished, setIsFinished }) => {
  const handleChange = (event) => {
    setIsFinished(event.target.value);
  };
  return (
    <div className="finished-div">
      <label htmlFor="finished">Finished</label>
      <select
        name="finished"
        id="finished"
        required
        defaultValue={finished}
        onChange={handleChange}
      >
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
    </div>
  );
};

export default FinishedSelect;
