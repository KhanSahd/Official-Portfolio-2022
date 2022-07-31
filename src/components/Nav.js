import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Nav.css";
import { AiFillHome } from "react-icons/ai";
import { AiFillProfile } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { FcContacts } from "react-icons/fc";

function Nav() {
  return (
    <div className="nav">
      <Link to="/" className="nav-link nav-name">
        <p className="nav-text">
          Sahd Khan <AiFillHome />
        </p>
      </Link>
      <Link to="/about" className="nav-link">
        <p className="nav-text">
          About <AiFillProfile />
        </p>
      </Link>
      <Link to="/projects" className="nav-link">
        <p className="nav-text">
          Projects <GrProjects />
        </p>
      </Link>
      <Link to="/contact" className="nav-link">
        <p className="nav-text">
          Contact <FcContacts />{" "}
        </p>
      </Link>
    </div>
  );
}

export default Nav;
