import { useContext } from "react";
import UserInfoSection from "../../components/UserInfoSection/UserInfoSection";
import ProjectInfoSection from "../../components/ProjectInfoSection/ProjectInfoSection";
import ScreenshotSection from "../../components/ScreenshotSection/ScreenshotSection";
import AchievementsSection from "../../components/AchievementsSection/AchievementsSection";
import PendingSection from "../../components/PendingSection/PendingSection";
import { ProjectDetailsContext } from "../../context/projectDetailsContext";

const Project = () => {
  // const { projectDetails } = useContext(ProjectDetailsContext);
  const projectDetails = {
    photo: "https://avatars.githubusercontent.com/u/75849528?v=4",
    firstname: "Victor",
    lastname: "Outeiro",
    bootcamp: "Full-Stack",
    curse: "23-04",
    project_id: 19,
    title: "Homework",
    date: "2023-07-22",
    type: "Full-Stack",
    description:
      "A place where the students of The Bridge can share their projects. Develop an entire web aplication with PostgreSQL, Node and React. In hac habitasse platea dictumst. Ut ullamcorper est in felis aliquam scelerisque. Nunc bibendum faucibus sem vitae aliquet.",
    achievement_one:
      "Construct the CRUD with Node and PostgreSQL. Routing with Node and Express",
    achievement_two:
      "Build the React components structure. Functionality with React states and lifecycle of their components. Implement Hooks to enlarge the potential of the App. Routing with React Router Dom",
    achievement_three:
      "Authentication with JWT and JS-Cookie. Session management using a token sent by a Express controller in the back and taked by Js-Cookie in the front.",
    finished: false,
    pending_one:
      "Add a profile view where the user could change and update his/her data info",
    pending_two:
      "Favorites function and Favorites view, section where you can see the projects you have saved and unmark them",
    pending_three:
      "Comments functionlity. Inside the profile view, add a section where leave a message to give your opinion or a advice to complete the project",
    img_small:
      "https://github.com/Radu-A/homework/raw/develop/server/assets/screenshot-smartphone.jpg",
    img_big:
      "https://github.com/Radu-A/homework/raw/develop/server/assets/screenshot-desktop.jpg",
    github: "https://github.com/Radu-A/homework",
    site: "https://homework-lg52.onrender.com/",
  };

  return (
    <main className="project-main">
      <h1>PROJECT DESCRIPTION</h1>
      <h1>{projectDetails.title}</h1>
      <UserInfoSection projectDetails={projectDetails} />
      <ProjectInfoSection projectDetails={projectDetails} />
      <ScreenshotSection projectDetails={projectDetails} />
      <AchievementsSection projectDetails={projectDetails} />
      <PendingSection projectDetails={projectDetails} />
    </main>
  );
};

export default Project;
