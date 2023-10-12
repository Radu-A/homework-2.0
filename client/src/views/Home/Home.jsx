import { useEffect, useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import Aside from "../../components/Aside/Aside";
import ProjectList from "../../components/ProjectList/ProjectList";

const Home = () => {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    const tryFetch = async () => {
      const result = await fetch("http://localhost:3000/api/projects");
      const data = await result.json();
      setProjectList(data);
    };
    tryFetch();
  }, []);

  return (
    <main className="home-main">
      <section className="home-header-section">
        <h1>HOMEWORK</h1>
      </section>
      <SearchForm />
      <Aside />
      <ProjectList projectList={projectList} />
    </main>
  );
};

export default Home;
