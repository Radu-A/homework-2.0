import { useContext } from "react";
import UserInfoSection from "../../components/UserInfoSection/UserInfoSection";
import ProjectInfoSection from "../../components/ProjectInfoSection/ProjectInfoSection";
import ScreenshotSection from "../../components/ScreenshotSection/ScreenshotSection";
import AchievementsSection from "../../components/AchievementsSection/AchievementsSection";
import PendingSection from "../../components/PendingSection/PendingSection";
import { ProjectDetailsContext } from "../../context/projectDetailsContext";

const Project = () => {
  const { projectDetails } = useContext(ProjectDetailsContext);

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
