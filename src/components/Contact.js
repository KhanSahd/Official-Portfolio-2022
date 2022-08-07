import React from "react";
import "../stylesheets/Contact.css";
import { DiGithubBadge } from "react-icons/di";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-container">
        <a
          href="tel:+12096965182"
          className="contact-link"
          onMouseOver={{ scale: 2 }}
        >
          <AiFillPhone className="contact-phone contact-icon" />
        </a>
        <a href="mailto:03sahd@gmail.com" className="contact-link">
          <AiOutlineMail className="contact-email contact-icon" />
        </a>
        <a
          href="https://github.com/KhanSahd"
          target="_blank"
          className="contact-link"
          rel="noreferrer"
        >
          <DiGithubBadge className="contact-github contact-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/sahdkhan/"
          target="_blank"
          className="contact-link"
          rel="noreferrer"
        >
          <AiFillLinkedin className="contact-linkedin contact-icon" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
