import React, { useState, useEffect } from "react";
import "./NavBar.scss";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

function NavBar({ scrollHome, scrollAbout, scrollProjects, scrollContact }) {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`navBarWrapper ${show && "navBarWrapper__show"}`}>
      <div className="navBar">
        <ul className="navBar__icons">
          <li className="navBar__icons__items">
            <span>
              <a className="icons" href="https://github.com/QasHussain">
                <AiFillGithub />
              </a>
            </span>
          </li>
          <li className="navBar__icons__items">
            <span>
              <a
                className="icons"
                href="https://www.linkedin.com/in/qasim-hussain-353088108/"
              >
                <AiFillLinkedin />
              </a>
            </span>
          </li>
          <li className="navBar__icons__items">
            <span>
              <a className="icons" href="mailto:Qas_24@hotmail.com">
                <AiOutlineMail />
              </a>
            </span>
          </li>
        </ul>
        <ul className="navBar__menu">
          <li className="navBar__menu__items">
            <span onClick={scrollHome} className="text">
              Home
            </span>
          </li>
          <li className="navBar__menu__items">
            <span onClick={scrollAbout} className="text">
              About
            </span>
          </li>
          <li className="navBar__menu__items">
            <span onClick={scrollProjects} className="text">
              Projects
            </span>
          </li>
          <li className="navBar__menu__items">
            <span onClick={scrollContact} className="text">
              Contact
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
