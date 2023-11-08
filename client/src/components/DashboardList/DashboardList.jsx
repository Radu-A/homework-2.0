import { v4 as uuidv4 } from "uuid";
import DashboardProjectCard from "./DashboardProjectCard/DashboardProjectCard";

const DashboardList = ({ projectList }) => {
  return (
    <section className="dashboard-list-section">
      {projectList.length > 0 &&
        projectList.map((project) => {
          return <DashboardProjectCard project={project} key={uuidv4()} />;
        })}
    </section>
  );
};

export default DashboardList;
