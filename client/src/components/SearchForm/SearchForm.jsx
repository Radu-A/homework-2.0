import { useContext } from "react";
import searhIcon from "../../assets/icons/search-icon.svg";
import { SearchProjectsContext } from "../../context/searchProjectsContext";

const SearchForm = () => {
  const { updateOrderFilter, updateKeyWordFilter } = useContext(
    SearchProjectsContext
  );

  const handleSelectChange = (event) => {
    updateOrderFilter(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.project.value);
    updateKeyWordFilter(event.target.project.value);
  };

  return (
    <section className="search-form-section">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-form-div">
          <input
            type="text"
            name="project"
            id=""
            className="search-form-input"
            placeholder="Search by title, bootcamp, type..."
          />
          <button>
            <img src={searhIcon} alt="" />
          </button>
        </div>
        <select
          name="order"
          id="order"
          className="search-form-select"
          onChange={handleSelectChange}
        >
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
