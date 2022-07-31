import React from "react";
import { motion } from "framer-motion";
import "../stylesheets/About.css";
import { DiReact } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiJava } from "react-icons/di";
import { DiGithubBadge } from "react-icons/di";
import { DiNodejs } from "react-icons/di";

function About() {
  return (
    <motion.div
      className="about"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 1 } }}
    >
      <div className="about-skills">
        <DiHtml5 className="skills-icons html-icon" />
        <DiCss3 className="skills-icons css3" />
        <DiJavascript1 className="skills-icons javascript" />
        <DiReact className="skills-icons react" />
        <DiJava className="skills-icons java" />
        <DiGithubBadge className="skills-icons github" />
        <DiNodejs className="skills-icons node" />
      </div>
    </motion.div>
  );
}

export default About;
