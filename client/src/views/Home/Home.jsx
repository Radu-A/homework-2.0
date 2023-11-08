import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { SearchProjectsContext } from "../../context/searchProjectsContext";
import SearchForm from "../../components/SearchForm/SearchForm";
import Aside from "../../components/Aside/Aside";
import ProjectList from "../../components/ProjectList/ProjectList";
import Pagination from "../../components/Pagination/Pagination";

const Home = () => {
  const server = import.meta.env.VITE_SERVER;
  const [projectList, setProjectList] = useState([]);
  const [bootcampFilter, setBootcampFilter] = useState("");
  const [finishedFilter, setFinishedFilter] = useState("");
  const [deployedFilter, setDeployedFilter] = useState("");
  const [pageFilter, setPageFilter] = useState(`page=1`);

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

  const searchProjectsPack = {
    updateBootcampFilter,
    updateFinishedFilter,
    updateDeployedFilter,
    updatePageFilter,
    pageFilter,
  };

  const isDesktopWide = useMediaQuery({
    query: "(min-width: 970px)",
  });

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

  // useEffect(() => {
  //   const tryFetch = async () => {
  //     const result = await fetch("http://localhost:3000/api/projects?");
  //     const data = await result.json();
  //     setProjectList(data);
  //   };
  //   tryFetch();
  // }, []);

  // speachSynthesis

  const talk = () => {
    const text =
      "¿Por qué tienes esa cara de tonto? Espabila un poco, anda.";
    const message = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(message);
  };

  useEffect(() => {
    // talk();
  }, []);

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
