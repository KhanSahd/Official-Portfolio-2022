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
import me from "../images/mypic.jpeg";

function About() {
  return (
    <motion.div
      className="about"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 1 } }}
    >
      <div className="about-container">
        <div className="pic-name">
          <img src={me} className="pic" />
          <h2 className="name">Sahd Khan</h2>
        </div>

        <div className="birthday">
          <h2 className="birthday-date">March</h2>
          <h2 className="birthday-date">28</h2>
          <h2 className="birthday-date">1999</h2>
        </div>

        {/*
      <div className="about-leftside">
        <div className="skills-container">
          <h3 className="skills-heading">Languages</h3>
          <div className="about-skills">
            <DiHtml5 className="skills-icons html-icon" />
            <DiCss3 className="skills-icons css3" />
            <DiJavascript1 className="skills-icons javascript" />
            <DiReact className="skills-icons react" />
            <DiJava className="skills-icons java" />
            <DiGithubBadge className="skills-icons github" />
            <DiNodejs className="skills-icons node" />
          </div>
        </div>
      </div>
      */}
      </div>
    </motion.div>
  );
}

export default About;
