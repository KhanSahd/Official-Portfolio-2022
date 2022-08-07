import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Nav.css";
import { AiFillProfile } from "react-icons/ai";
import { RiGalleryLine } from "react-icons/ri";
import { FcContacts } from "react-icons/fc";
import me from "../images/logo.png";
import { Fade } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { burgerlinks } from "./Variants";

function Nav() {
  const [menuOn, setMenu] = useState(false);

  const handleClick = () => {
    if (!menuOn) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  };

  return (
    <div className="nav">
      <Link to="/" className="nav-link nav-name">
        <img src={me} className="nav-logo" alt="my logo" />
      </Link>
      <div className="links">
        <Link to="/about" className="nav-link">
          <p className="nav-text">
            About <AiFillProfile />
          </p>
        </Link>
        <Link to="/projects" className="nav-link">
          <p className="nav-text">
            Projects <RiGalleryLine className="project-icon" />
          </p>
        </Link>
        <Link to="/contact" className="nav-link">
          <p className="nav-text">
            Contact <FcContacts />{" "}
          </p>
        </Link>
      </div>

      <div className="hamburger" onClick={handleClick}>
        <Fade className="burger-Icon" />
      </div>
      <AnimatePresence>
        {menuOn ? (
          <motion.div
            className="hamburger-menu"
            variants={burgerlinks}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Link to="/about" className="burger-link">
              <p className="hamburger-text">
                About <AiFillProfile />
              </p>
            </Link>
            <Link to="/projects" className="burger-link">
              <p className="hamburger-text burger-link">
                Projects <RiGalleryLine className="project-icon" />
              </p>
            </Link>
            <Link to="/contact" className="burger-link">
              <p className="hamburger-text">
                Contact <FcContacts />{" "}
              </p>
            </Link>
          </motion.div>
        ) : (
          ""
        )}
      </AnimatePresence>
    </div>
  );
}

export default Nav;
