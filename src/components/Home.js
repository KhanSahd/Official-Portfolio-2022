import "../stylesheets/Home.css";
import { motion } from "framer-motion";
// import selfie from "../selfie.png";
import { fadeIn, title } from "./Variants";

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
          <a href="mailto:03sahd@gmail.com" className="link-button">
            <motion.h3
              className="home-callButton container-item"
              animate={{ y: 30, scale: 1.5 }}
              transition={{
                repeat: Infinity,
                duration: 0.2,
                repeatType: "reverse",
                repeatDelay: 0.5,
                type: "tween",
              }}
            >
              Contact Me
            </motion.h3>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
