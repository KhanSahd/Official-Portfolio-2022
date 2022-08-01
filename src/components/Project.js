import React, { useState } from "react";
import "../stylesheets/Project.css";
import { motion } from "framer-motion";
import images from "./image";

function Project() {
  return (
    <motion.div
      className="project"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 1 } }}
    >
      <motion.div className="project-Container">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -1000 }}
          className="inner-Container"
        >
          {images.map((image) => {
            return (
              <motion.div
                className="item"
                style={{
                  backgroundImage: `url(${image.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                key={image.title}
              >
                <p className="item-text">{image.title}</p>
                <motion.a href={image.link} target="_blank" className="link">
                  <p className="click-button">Click to open</p>
                </motion.a>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
      <motion.h1 className="drag-text">Drag projects</motion.h1>
    </motion.div>
  );
}

export default Project;
