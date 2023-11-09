import React from "react";
import TypeSelect from "./TypeSelect/TypeSelect";
import FinishedSelect from "./FinishedSelect/FinishedSelect";
import Pending from "./Pending/Pending";
import Achievements from "./Achievements/Achievements";

const saveProject = async (newProject) => {
  const server = import.meta.env.VITE_SERVER;

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
    const newProject = {
      user_id: "github|75849528",
      title: "caca",
      type: "caca",
      description: "caca",
      achievement_one: "caca",
      achievement_two: "caca",
      achievement_three: "caca",
      finished: "true",
      pending_one: "caca",
      pending_two: "caca",
      pending_three: "caca",
      img_small: "caca",
      img_big: "caca",
      github: "caca",
      site: "caca",
    };
    saveProject(newProject)
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
      <Achievements />
      <FinishedSelect />
      <Pending />
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
