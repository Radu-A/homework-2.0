import searhIcon from "../../assets/icons/search-icon.svg";

const SearchForm = () => {
  return (
    <section className="search-form-section">
      <form action="" className="search-form">
        <div className="search-form-div">
          {/* <label htmlFor="project"> */}
          
            <input
              type="text"
              name="project"
              id=""
              className="search-form-input"
              placeholder="Search by title, bootcamp, type..."
            />
          {/* </label> */}
          <img src={searhIcon} alt="" />
        </div>
        <select name="" id="" className="search-form-select">
          <option value="">Order By</option>
          <option value="date">Date</option>
          <option value="bootcamp">Bootcamp</option>
          <option value="curse">Curse</option>
        </select>
      </form>
    </section>
  );
};

export default SearchForm;
