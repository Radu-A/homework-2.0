import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { SearchProjectsContext } from "../../context/searchProjectsContext";
import SearchForm from "../../components/SearchForm/SearchForm";
import Aside from "../../components/Aside/Aside";
import ProjectList from "../../components/ProjectList/ProjectList";

const Home = () => {
  const [projectList, setProjectList] = useState([]);
  const [bootcampFilter, setBootcampFilter] = useState("");
  const [finishedFilter, setFinishedFilter] = useState("");
  const [deployedFilter, setDeployedFilter] = useState("")

  const updateBootcampFilter = (bootcamp) => {
    setBootcampFilter(`bootcamp=${bootcamp}&`);
  };
  const updateFinishedFilter = (finished) => {
    setFinishedFilter(`finished=${finished}&`);
  };
  const updateDeployedFilter = (deployed)=> {
    setDeployedFilter(`deployed=${deployed}&`)
  }

  const searchProjectsPack = {
    updateBootcampFilter,
    updateFinishedFilter,
    updateDeployedFilter
  };

  const isDesktopWide = useMediaQuery({
    query: "(min-width: 970px)",
  });

  useEffect(() => {
    const tryFetch = async () => {
      const result = await fetch(
        `http://localhost:3000/api/projects?${bootcampFilter}${finishedFilter}${deployedFilter}`
      );
      console.log(`http://localhost:3000/api/projects?${bootcampFilter}${finishedFilter}${deployedFilter}`)
      const data = await result.json();
      setProjectList(data);
    };
    tryFetch();
  }, [bootcampFilter, finishedFilter, deployedFilter]);

  useEffect(() => {
    const tryFetch = async () => {
      const result = await fetch("http://localhost:3000/api/projects?");
      const data = await result.json();
      setProjectList(data);
    };
    tryFetch();
  }, []);

  return (
    <main className="home-main">
      <section className="home-header-section">
        <h1>COMMUNITY</h1>
      </section>
      <SearchProjectsContext.Provider value={searchProjectsPack}>
        <SearchForm />
        {isDesktopWide && <Aside />}
        <ProjectList projectList={projectList} />
      </SearchProjectsContext.Provider>
    </main>
  );
};

export default Home;
