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
import { staggerContainer } from "./Variants";

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
          <h3 className="name">Sahd Khan</h3>
        </div>

        <div className="birthday">
          <h3 className="birthday-date month">March 28, 1999</h3>
        </div>

        <div className="biography">
          <h2 className="bio-title">Biography</h2>
          <p className="bio-item">• Senior at Sacramento State University</p>
          <p className="bio-item">• Majoring in Computer Science</p>
          <p className="bio-item">• Loves music, learning, and working out</p>
          <p className="bio-item">• Probably distracted by code</p>
        </div>

        <div className="languages">
          <h2 className="languages-title">Languages</h2>
          <div className="languages-lang">
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
    </motion.div>
  );
}

export default About;
