// modules
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProjectDetailsContext } from "../../context/projectDetailsContext";
// components
import Achievements from "./Achievements/Achievements";
import FinishedSelect from "./FinishedSelect/FinishedSelect";
import Pending from "./Pending/Pending";
import TypeSelect from "./TypeSelect/TypeSelect";
import ModalRight from "../EditForm/ModalRight/ModalRight";
import ModalWrong from "../NewForm/ModalWrong/ModalWrong";

const EditForm = () => {
  // variables
  const server = import.meta.env.VITE_SERVER;
  const navigate = useNavigate();
  // states
  const [isFinished, setIsFinished] = useState("false");
  const [openModalRight, setOpenModalRight] = useState(false);
  const [openModalWrong, setOpenModalWrong] = useState(false);
  // context
  const { projectDetails } = useContext(ProjectDetailsContext);

  // functions
  const handleOpenModalRight = () => setOpenModalRight(true);
  const handleOpenModalWrong = () => setOpenModalWrong(true);

  window.onbeforeunload = () => {
    return "¿Seguro que quieres salir?";
  };

  const updateProject = async (project) => {
    console.log(project);
    try {
      const response = await fetch(
        `${server}/api/projects?project_id=${project.project_id}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(project),
        }
      );
      const data = await response.json();
      console.log(data);
      if (data.updated === true) {
        handleOpenModalRight();
      } else {
        handleOpenModalWrong();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const target = event.target;
    console.log(target.title.value);
    let project;
    if (isFinished === "false") {
      project = {
        project_id: projectDetails.project_id,
        title: target.title.value,
        date: projectDetails.date,
        type: target.type.value,
        description: target.description.value,
        achievement_one: target.achievement_one.value,
        achievement_two: target.achievement_two.value,
        achievement_three: target.achievement_three.value,
        finished: target.finished.value,
        pending_one: target.pending_one.value,
        pending_two: target.pending_two.value,
        pending_three: target.pending_three.value,
        img_small: target.img_small.value,
        img_big: target.img_big.value,
        github: target.github.value,
        site: target.site.value,
      };
    } else {
      project = {
        project_id: projectDetails.project_id,
        title: target.title.value,
        date: projectDetails.date,
        type: target.type.value,
        description: target.description.value,
        achievement_one: target.achievement_one.value,
        achievement_two: target.achievement_two.value,
        achievement_three: target.achievement_three.value,
        finished: target.finished.value,
        pending_one: null,
        pending_two: null,
        pending_three: null,
        img_small: target.img_small.value,
        img_big: target.img_big.value,
        github: target.github.value,
        site: target.site.value,
      };
    }
    updateProject(project);
  };

  // life cycle
  useEffect(() => {
    if (Object.keys(projectDetails).length === 0) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <form action="" className="newproject-form" onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Title"
        defaultValue={projectDetails.title}
        required
      />
      {projectDetails.type && <TypeSelect type={projectDetails.type} />}
      <label htmlFor="description"></label>
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
        required
        defaultValue={projectDetails.description}
      ></textarea>
      <Achievements projectDetails={projectDetails} />
      <FinishedSelect
        finished={projectDetails.finished}
        setIsFinished={setIsFinished}
      />
      {isFinished === "false" && <Pending projectDetails={projectDetails} />}
      <label htmlFor="img_big">Desktop screenshot (url)</label>
      <input
        type="text"
        name="img_big"
        id="img_big"
        placeholder="Desktop screenshot"
        required
        defaultValue={projectDetails.img_big}
      />
      <label htmlFor="img_small">Desktop screenshot (url)</label>
      <input
        type="text"
        name="img_small"
        id="img_small"
        placeholder="Mobile screenshot"
        defaultValue={projectDetails.img_small}
      />
      <label htmlFor="github">Github link</label>
      <input
        type="text"
        name="github"
        id="github"
        placeholder="Github"
        required
        defaultValue={projectDetails.github}
      />
      <label htmlFor="site">Live site link</label>
      <input
        type="text"
        name="site"
        id="site"
        placeholder="Live site"
        defaultValue={projectDetails.site}
      />
      <button type="submit">SAVE</button>
      <ModalRight
        openModalRight={openModalRight}
        setOpenModalRight={setOpenModalRight}
      />
      <ModalWrong
        openModalWrong={openModalWrong}
        setOpenModalWrong={setOpenModalWrong}
      />
    </form>
  );
};

export default EditForm;
