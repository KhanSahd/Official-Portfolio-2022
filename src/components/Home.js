import React, { useState } from "react";
import "../stylesheets/Home.css";
import { motion } from "framer-motion";
import selfie from "../selfie.png";
import { fadeIn, title, staggerContainer } from "./Variants";

function Home() {
  return (
    <motion.div
      className="home"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 1 } }}
    >
      <div className="home-container">
        <div className="container-text">
          <motion.h1
            className="container-name"
            variants={fadeIn}
            initial="hidden"
            animate="show"
          >
            Sahd Khan
          </motion.h1>
          <motion.h2
            variants={title}
            initial="hidden"
            animate="show"
            className="container-job"
          >
            FrontEnd Developer
          </motion.h2>
          <motion.h3
            className="home-callButton container-item"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            Contact Me
          </motion.h3>
          <motion.img
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="selfie"
            src={selfie}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
