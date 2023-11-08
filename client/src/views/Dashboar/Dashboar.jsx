import React, { useEffect, useState } from "react";
import DashboardList from "../../components/DashboardList/DashboardList";

const Dashboar = () => {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    const server = import.meta.env.VITE_SERVER;
    const searchProjects = async () => {
      const result = await fetch(
        `${server}/api/projects/user?user_id=github|75849528`
      );
      const data = await result.json();
      setProjectList(data);
      console.log(data)
    };

    searchProjects();
  }, []);

  return (
    <main className="dashboard-main">
      <section className="dashboard-header-section">
        <h1>DASHBOARD</h1>
        <button>+</button>
      </section>
      <DashboardList projectList={projectList}/>
    </main>
  );
};

export default Dashboar;
