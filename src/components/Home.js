import React, { useState } from "react";
import "../stylesheets/Home.css";
import { motion } from "framer-motion";
import selfie from "../selfie.png";

function Home() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <motion.div
      className="home"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 1 } }}
    >
      <div className="home-container">
        <div className="container-text">
          <h1 className="container-name">Sahd Khan</h1>
          <h2>FrontEnd Developer</h2>
          <h3 className="home-callButton">Contact Me</h3>
          {/* <div className="text-skills">
            <DiHtml5 className="skills-icons html" />
            <DiCss3 className="skills-icons css3" />
            <DiJavascript1 className="skills-icons javascript" />
            <DiReact className="skills-icons react" />
            <DiJava className="skills-icons java" />
            <DiGithubBadge className="skills-icons github" />
            <DiNodejs className="skills-icons node" />
  </div> */}
        </div>
        <motion.img
          className="container-img"
          src={selfie}
          alt=" Me"
          animate={{
            rotate: isAnimating ? 360 : 0,
          }}
          transition={{
            duration: 1,
          }}
          onMouseOver={() => setIsAnimating(!isAnimating)}
        />
      </div>
    </motion.div>
  );
}

export default Home;
