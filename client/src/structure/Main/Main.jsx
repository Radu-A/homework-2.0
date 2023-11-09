import { Routes, Route } from "react-router-dom";
import Home from "../../views/Home";
import Project from "../../views/Project";
import Profile from "../../views/Profile";
import Signup from "../../views/Signup/Signup";
import Dashboar from "../../views/Dashboar/Dashboar";
import NewProject from "../../views/NewProject/NewProject";

const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboar />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/project" element={<Project />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/new" element={<NewProject />} />
      </Routes>
    </>
  );
};

export default Main;
