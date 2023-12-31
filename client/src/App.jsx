// import "./App.css";
import "./style/style.scss";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ProjectDetailsContext } from "./context/projectDetailsContext";
import Footer from "./structure/Footer/Footer";
import Header from "./structure/Header/Header";
import Main from "./structure/Main/Main";

function App() {
  const [projectDetails, setProjectDetails] = useState({});
  const [commentTrigger, setCommentTrigger] = useState(false);

  const updateProjectDetails = (project) => {
    setProjectDetails(project);
  };
  const updateCommentTrigger = () => {
    setCommentTrigger(!commentTrigger);
  };

  const projectPack = {
    updateProjectDetails,
    projectDetails,
    updateCommentTrigger,
    commentTrigger,
  };
  return (
    <>
      <BrowserRouter>
        <ProjectDetailsContext.Provider value={projectPack}>
          <Header />
          <Main />
          <Footer />
        </ProjectDetailsContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
