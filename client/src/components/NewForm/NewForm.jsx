import { useState } from "react";

// componets
import TypeSelect from "./TypeSelect/TypeSelect";
import FinishedSelect from "./FinishedSelect/FinishedSelect";
import Pending from "./Pending/Pending";
import Achievements from "./Achievements/Achievements";
import ModalRight from "./ModalRight/ModalRight";
import ModalWrong from "./ModalWrong/ModalWrong";

const NewForm = () => {
  // states
  const [isFinished, setIsFinished] = useState("false");
  const [openModalRight, setOpenModalRight] = useState(false);
  const [openModalWrong, setOpenModalWrong] = useState(false);
  // functions
  const handleOpenModalRight = () => setOpenModalRight(true);
  const handleOpenModalWrong = () => setOpenModalWrong(true);

  window.onbeforeunload = () => {
    return "¿Seguro que quieres salir?";
  };

  const saveProject = async (newProject) => {
    const server = import.meta.env.VITE_SERVER;

    try {
      const response = await fetch(`${server}/api/projects`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newProject),
      });
      const data = await response.json();
      console.log(data);
      if (data.created === true) {
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
    const newProject = {
      user_id: "github|75849528",
      title: target.title.value,
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
    saveProject(newProject);
  };

  return (
    <form action="" className="newproject-form" onSubmit={handleSubmit}>
      <label htmlFor="title">Title *</label>
      <input type="text" name="title" id="title" placeholder="Title" required />
      <TypeSelect />
      <label htmlFor="description">Description *</label>
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
        required
      ></textarea>
      <Achievements />
      <FinishedSelect setIsFinished={setIsFinished} isFinished={isFinished} />
      {isFinished === "false" && <Pending />}
      <label htmlFor="img_big">Desktop screenshot (url) *</label>
      <input
        type="text"
        name="img_big"
        id="img_big"
        placeholder="Desktop screenshot"
        required
      />
      <label htmlFor="img_small">Mobile screenshot (url)</label>
      <input
        type="text"
        name="img_small"
        id="img_small"
        placeholder="Mobile screenshot"
      />
      <label htmlFor="github">Github link *</label>
      <input
        type="text"
        name="github"
        id="github"
        placeholder="Github"
        required
      />
      <label htmlFor="site">Live site link</label>
      <input type="text" name="site" id="site" placeholder="Live site" />
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

export default NewForm;
