import React from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import Aside from "../../components/Aside/Aside";
import ProjectList from "../../components/ProjectList/ProjectList";

const Home = () => {
  return (
    <>
      <section className="home-header-section">
        <h1>HOMEWORK</h1>
      </section>
      <SearchForm />
      <Aside />
      <ProjectList />
    </>
  );
};

export default Home;
