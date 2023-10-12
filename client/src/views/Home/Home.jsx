import { useEffect } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import Aside from "../../components/Aside/Aside";
import ProjectList from "../../components/ProjectList/ProjectList";

const Home = () => {
  useEffect(() => {}, []);

  return (
    <main className="home-main">
      <section className="home-header-section">
        <h1>HOMEWORK</h1>
      </section>
      <SearchForm />
      <Aside />
      <ProjectList />
    </main>
  );
};

export default Home;
