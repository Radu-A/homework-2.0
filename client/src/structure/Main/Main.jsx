import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ProjectDetailsContext } from "../../context/projectDetailsContext";
import Home from "../../views/Home";
import Project from "../../views/Project";

const Main = () => {
  const [projectDetails, setProjectDetails] = useState({});

  const caca = "caca";

  const updateProjectDetails = (project) => {
    setProjectDetails(project);
  };

  const projectPack = {
    updateProjectDetails,
    projectDetails,
  };

  return (
    <>
      <ProjectDetailsContext.Provider value={projectPack}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </ProjectDetailsContext.Provider>
    </>
  );
};

export default Main;
