import React from "react";
import "./NavBar.scss";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

function NavBar() {
  return (
    <div className="navBarWrapper">
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
            <span className="text">Home</span>
          </li>
          <li className="navBar__menu__items">
            <span className="text">About</span>
          </li>
          <li className="navBar__menu__items">
            <span className="text">Projects</span>
          </li>
          <li className="navBar__menu__items">
            <span className="text">Contact</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
