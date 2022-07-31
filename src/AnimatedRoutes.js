import React from "react";
import "./AnimatedRoutes.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <Routes
      location={location}
      key={location.pathname}
      classname="animatedroutes"
    >
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default AnimatedRoutes;