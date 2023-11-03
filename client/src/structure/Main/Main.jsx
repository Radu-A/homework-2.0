import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "../../views/Home";
import Project from "../../views/Project";
import Profile from "../../views/Profile";

const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default Main;
