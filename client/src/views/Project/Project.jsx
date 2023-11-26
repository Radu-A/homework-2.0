import { useContext, useEffect } from "react";
import { ProjectDetailsContext } from "../../context/projectDetailsContext";
import { useNavigate } from "react-router-dom";
// Components
import UserInfoSection from "../../components/UserInfoSection/UserInfoSection";
import ProjectInfoSection from "../../components/ProjectInfoSection/ProjectInfoSection";
import ScreenshotSection from "../../components/ScreenshotSection/ScreenshotSection";
import AchievementsSection from "../../components/AchievementsSection/AchievementsSection";
import PendingSection from "../../components/PendingSection/PendingSection";
import FeedbackSection from "../../components/FeedbackSection/FeedbackSection";

const Project = () => {
  // variables
  const navigate = useNavigate();

  // context
  const { projectDetails } = useContext(ProjectDetailsContext);

  useEffect(() => {
    if (Object.keys(projectDetails).length === 0) {
      navigate("/");
    }
  }, []);

  return (
    <main className="project-main">
      <div className="project-div">
        {/* <h1 className="page-name-heading">PROJECT DESCRIPTION</h1> */}
        <UserInfoSection projectDetails={projectDetails} />
        <ProjectInfoSection projectDetails={projectDetails} />
        <ScreenshotSection projectDetails={projectDetails} />
        <AchievementsSection projectDetails={projectDetails} />
        {!projectDetails.finished && (
          <PendingSection projectDetails={projectDetails} />
        )}
      </div>
      <FeedbackSection />
    </main>
  );
};

export default Project;
