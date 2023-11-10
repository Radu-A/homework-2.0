import { Link } from "react-router-dom";

const DashboardHeader = () => {
  return (
    <section className="dashboard-header-section">
      <h1>DASHBOARD</h1>
      <Link to="/new">
        <button>+</button>
      </Link>
    </section>
  );
};

export default DashboardHeader;
