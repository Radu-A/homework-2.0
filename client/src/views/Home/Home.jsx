import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { SearchProjectsContext } from "../../context/searchProjectsContext";
import SearchForm from "../../components/SearchForm/SearchForm";
import Aside from "../../components/Aside/Aside";
import ProjectList from "../../components/ProjectList/ProjectList";
import Pagination from "../../components/Pagination/Pagination";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  // variables
  const server = import.meta.env.VITE_SERVER;
  const isDesktopWide = useMediaQuery({
    query: "(min-width: 970px)",
  });
  // states
  const [projectList, setProjectList] = useState([]);
  const [bootcampFilter, setBootcampFilter] = useState("");
  const [finishedFilter, setFinishedFilter] = useState("");
  const [deployedFilter, setDeployedFilter] = useState("");
  const [pageFilter, setPageFilter] = useState(`page=1`);
  // functions
  const updateBootcampFilter = (bootcamp) => {
    setBootcampFilter(`bootcamp=${bootcamp}&`);
  };
  const updateFinishedFilter = (finished) => {
    setFinishedFilter(`finished=${finished}&`);
  };
  const updateDeployedFilter = (deployed) => {
    setDeployedFilter(`deployed=${deployed}&`);
  };
  const updatePageFilter = (page) => {
    setPageFilter(`page=${page}`);
  };

  const talk = () => {
    const text = "Hola, que guapo estás hoy.";
    const message = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(message);
  };
  // context value
  const searchProjectsPack = {
    updateBootcampFilter,
    updateFinishedFilter,
    updateDeployedFilter,
    updatePageFilter,
    pageFilter,
  };

  useEffect(() => {
    const searchProjects = async () => {
      const result = await fetch(
        `${server}/api/projects?${bootcampFilter}${finishedFilter}${deployedFilter}${pageFilter}`
      );
      const data = await result.json();
      setProjectList(data);
    };
    searchProjects();
  }, [bootcampFilter, finishedFilter, deployedFilter, pageFilter]);

  return (
    <main className="home-main">
      <section className="home-header-section">
        <h1 onClick={talk}>COMMUNITY</h1>
      </section>
      <SearchProjectsContext.Provider value={searchProjectsPack}>
        <SearchForm />
        {isDesktopWide && <Aside />}
        <ProjectList projectList={projectList} />
        <Pagination />
      </SearchProjectsContext.Provider>
    </main>
  );
};

export default Home;
