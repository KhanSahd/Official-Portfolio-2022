import React from "react";
import { motion } from "framer-motion";
import "../stylesheets/AboutNew.css";
import { DiReact } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiJava } from "react-icons/di";
import { DiGithubBadge } from "react-icons/di";
import { DiNodejs } from "react-icons/di";
import me from "../images/mypic.jpeg";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { logos, heading } from "./Variants";

function AboutNew() {
  return (
    <Parallax pages={4} className="aboutNew-parallax">
      {/*------------------------------------ BACKGROUNDS ---------------- */}
      <ParallaxLayer
        className="para-layer red"
        offset={0}
        factor={2}
      ></ParallaxLayer>

      <ParallaxLayer className="para-layer pink" offset={2} factor={2}>
        <div className="wave">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </ParallaxLayer>
      {/*------------------------------------ BACKGROUNDS ---------------- */}

      {/*------------------------------------ first heading ---------------- */}
      <ParallaxLayer className="bisque" offset={0} speed={3}>
        <motion.h1
          className="aboutNew-me"
          initial={{ x: -1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h1>
        <motion.p
          className="aboutNew-scroll"
          initial={{ scale: 0 }}
          animate={{ scale: 1.1 }}
          transition={{ delay: "1" }}
        >
          Scroll Down
        </motion.p>
      </ParallaxLayer>
      {/*------------------------------------ first heading ---------------- */}

      {/*------------------------------------ second heading ---------------- */}
      <ParallaxLayer className="info" offset={1} speed={0.5}>
        <h2>Senior at Sacramento State University,</h2>
      </ParallaxLayer>

      <ParallaxLayer className="info" offset={1.1} speed={1.5}>
        <h2>I Love Learning, playing sports, and listening to music,</h2>
      </ParallaxLayer>

      <ParallaxLayer className="info" offset={1.2} speed={1}>
        <h2>Probably Coding...</h2>
      </ParallaxLayer>

      <ParallaxLayer className="me" offset={1} speed={1.4}>
        <img className="me-pic" src={me} alt="me" />
        <p>Name: Sahd Khan</p>
        <p>DOB: 03/28/1999</p>
      </ParallaxLayer>
      {/*------------------------------------ second heading ---------------- */}

      {/* ----------------- languages-logos ------------------------------   */}
      <ParallaxLayer className="lang-heading" offset={2.2}>
        <motion.h1 variants={heading} initial="hidden" whileInView="visible">
          My palette
        </motion.h1>
      </ParallaxLayer>

      <ParallaxLayer className="lang" offset={2.2} speed={0.3}>
        <motion.div variants={logos} initial="hidden" whileInView="visible">
          <DiReact className="lang-pic react" />
        </motion.div>
      </ParallaxLayer>

      <ParallaxLayer className="lang" offset={2.5} speed={0.5}>
        <motion.div variants={logos} initial="hidden" whileInView="visible">
          <DiCss3 className="lang-pic css3" />
        </motion.div>
      </ParallaxLayer>

      <ParallaxLayer className="lang" offset={2.6} speed={1.2}>
        <motion.div variants={logos} initial="hidden" whileInView="visible">
          <DiJavascript1 className="lang-pic javascript" />
        </motion.div>
      </ParallaxLayer>

      <ParallaxLayer className="lang" offset={2.7} speed={2}>
        <motion.div variants={logos} initial="hidden" whileInView="visible">
          <DiHtml5 className="lang-pic html-icon" />
        </motion.div>
      </ParallaxLayer>

      <ParallaxLayer className="lang" offset={2.8} speed={1.3}>
        <motion.div variants={logos} initial="hidden" whileInView="visible">
          <DiJava className="lang-pic java" />
        </motion.div>
      </ParallaxLayer>

      <ParallaxLayer className="lang" offset={2.9} speed={0.8}>
        <motion.div variants={logos} initial="hidden" whileInView="visible">
          <DiGithubBadge className="lang-pic github" />
        </motion.div>
      </ParallaxLayer>

      <ParallaxLayer className="lang" offset={2.6} speed={2.2}>
        <motion.div variants={logos} initial="hidden" whileInView="visible">
          <DiNodejs className="lang-pic node" />
        </motion.div>
      </ParallaxLayer>
      {/* ----------------- languages-logos ------------------------------  */}

      {/* ----------------- languages-logos ------------------------------  */}

      <ParallaxLayer className="quote-box" offset={3}>
        <motion.div
          className="quote"
          variants={logos}
          initial="hidden"
          whileInView="visible"
        >
          <h1>
            "The happiness of your life depends upon the quality of your
            thoughts"
          </h1>
          <h2>- Marcus Aurelius</h2>
        </motion.div>
      </ParallaxLayer>

      {/* ----------------- languages-logos ------------------------------  */}
    </Parallax>
  );
}

export default AboutNew;
