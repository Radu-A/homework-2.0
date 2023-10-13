import { useContext, useState } from "react";
import { SearchProjectsContext } from "../../../context/searchProjectsContext";

const BootcampFilterArticle = () => {
  const [option, setOption] = useState("");
  const { updateBootcampFilter } = useContext(SearchProjectsContext);

  const handleChange = (event) => {
    console.log(event.target.value);
    updateBootcampFilter(event.target.value)
  };

  return (
    <article className="filter-article">
      <h3 className="filter-heading">Bootcamp</h3>
      <form action="" className="filter-form">
        <label htmlFor="cyber">
          <input
            type="radio"
            name="bootcamp"
            id=""
            className="filter-form"
            value="cyber"
            onChange={handleChange}
          />
          Cybersecurity
        </label>
        <label htmlFor="data">
          <input
            type="radio"
            name="bootcamp"
            id=""
            className="filter-form"
            value="data"
            onChange={handleChange}
          />
          Data Science
        </label>
        <label htmlFor="full">
          <input
            type="radio"
            name="bootcamp"
            id=""
            className="filter-form"
            value="full"
            onChange={handleChange}
          />
          Full-Stack
        </label>
        <label htmlFor="ux">
          <input
            type="radio"
            name="bootcamp"
            id=""
            className="filter-form"
            value="ux"
            onChange={handleChange}
          />
          UX/UI
        </label>
      </form>
    </article>
  );
};

export default BootcampFilterArticle;
