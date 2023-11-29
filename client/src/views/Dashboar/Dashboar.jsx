import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import DashboardList from "../../components/DashboardList/DashboardList";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";

const Dashboar = () => {
  // variables
  const { user } = useAuth0();
  let user_id;
  if (user) {
    user_id = user.sub;
  }
  // states
  const [projectList, setProjectList] = useState([]);
  // context

  useEffect(() => {
    const server = import.meta.env.VITE_SERVER;
    const searchProjects = async () => {
      const result = await fetch(
        `${server}/api/projects/user?user_id=${user_id}`
      );
      const data = await result.json();
      setProjectList(data);
    };

    searchProjects();
  }, [user_id]);

  return (
    <main className="dashboard-main">
      <div className="dashboard-div">
        <DashboardHeader />
        {projectList.length > 0 ? (
          <DashboardList projectList={projectList} />
        ) : (
          <article className="empty-card-article">
            <p>You don't have any projects yet {"\u{261D}"}</p>
          </article>
        )}
      </div>
    </main>
  );
};

export default Dashboar;
