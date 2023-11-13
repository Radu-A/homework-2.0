import TypeSelect from "./TypeSelect/TypeSelect";
import FinishedSelect from "./FinishedSelect/FinishedSelect";
import Pending from "./Pending/Pending";
import Achievements from "./Achievements/Achievements";
import { useState } from "react";

const saveProject = async (newProject) => {
  // variables
  const server = import.meta.env.VITE_SERVER;

  // states
  const [isFinished, setIsfinished] = useState(false);

  const updateIsFinished = (event) => {
    setIsfinished(event.target.value);
    console.log(event.target.vale);
  };

  try {
    const data = await fetch(`${server}/api/projects`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newProject),
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const NewForm = () => {
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
      <label htmlFor="title">Title</label>
      <input type="text" name="title" id="title" placeholder="Title" required />
      <TypeSelect />
      <label htmlFor="description"></label>
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
        required
      ></textarea>
      <Achievements />
      <FinishedSelect />
      <Pending />
      <label htmlFor="img_big">Desktop screenshot (url)</label>
      <input
        type="text"
        name="img_big"
        id="img_big"
        placeholder="Desktop screenshot"
        required
      />
      <label htmlFor="img_small">Desktop screenshot (url)</label>
      <input
        type="text"
        name="img_small"
        id="img_small"
        placeholder="Mobile screenshot"
      />
      <label htmlFor="github">Github link</label>
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
    </form>
  );
};

export default NewForm;
