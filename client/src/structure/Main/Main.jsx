import { Routes, Route } from "react-router-dom";
import Home from "../../views/Home";
import Project from "../../views/Project";
import Profile from "../../views/Profile";
import Signup from "../../views/Signup/Signup";
import Dashboar from "../../views/Dashboar/Dashboar";

const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboar />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/project" element={<Project />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default Main;
