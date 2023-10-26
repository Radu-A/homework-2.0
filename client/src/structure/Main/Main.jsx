import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "../../views/Home";
import Project from "../../views/Project";
import Signup from "../../views/Signup/Signup";

const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default Main;
