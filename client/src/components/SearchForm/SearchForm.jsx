import { useContext } from "react";
import searhIcon from "../../assets/icons/search-icon.svg";
import { SearchProjectsContext } from "../../context/searchProjectsContext";

const SearchForm = () => {
  const { updateOrderFilter } = useContext(SearchProjectsContext);

  const handleChange = (event) => {
    updateOrderFilter(event.target.value)
  };

  return (
    <section className="search-form-section">
      <form action="" className="search-form">
        <div className="search-form-div">
          <input
            type="text"
            name="project"
            id=""
            className="search-form-input"
            placeholder="Search by title, bootcamp, type..."
          />
          <img src={searhIcon} alt="" />
        </div>
        <select name="order" id="order" className="search-form-select" onChange={handleChange}>
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
