const TypeSelect = ({ type }) => {
  return (
    <>
      <label htmlFor="type">Select the type</label>
      <select name="type" id="type" required defaultValue={type}>
        <option value="">Type</option>
        <option value="Front-End">Front-End</option>
        <option value="Back-End">Back-End</option>
        <option value="Full-Stack">Full-Stack</option>
      </select>
    </>
  );
};

export default TypeSelect;
