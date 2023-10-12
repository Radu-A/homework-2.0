const BootcampFilterArticle = () => {
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
          />
          UX/UI
        </label>
      </form>
    </article>
  );
};

export default BootcampFilterArticle;