import React from "react";
import "./ProjectsPage.scss";
import Codex from "../../assets/Codex.jpg";

function ProjectsPage() {
  return (
    <div className="projectsPage">
      <div className="pTitleContainer">
        <h1 className="pTitleContainer__title">Projects</h1>
        <div className="pTitleContainer__border"></div>
      </div>

      <div className="pContentContainer">
        <div className="pContentContainer__imgBox">
          <img
            src={Codex}
            className="pContentContainer__imgBox__img"
            alt="codexImage"
          />
        </div>
        <div className="pContentContainer__textBox">
          <h2 className="pContentContainer__textBox__title">
            Final Fantasy Codex
          </h2>
          <p className="pContentContainer__textBox__txt">
            An online, interactive encyclopedia of every Final Fantasy character
            from entry 6-15 learning their backstory, age, first appearance and
            much more. The user can also use the search feature to browse for
            specific characters by name.
          </p>
          <p className="pContentContainer__textBox__txt">
            Built in React, using Javascript, Node.js, Sass and Moogle API, this
            application incorporates multiple API end points into a functional,
            user friendly interface with a fully responsive design for all
            devices.
          </p>
          <div className="pContentContainer__textBoxButtons">
            <a href="https://final-fantasy-codex-v2.web.app/" target="_blank">
              <button className="pContentContainer__textBoxButtons__btn">
                LIVE APP
              </button>
            </a>
            <a href="https://qasimh-dev.com/designprocess" target="_blank">
              <button className="pContentContainer__textBoxButtons__btn">
                DESIGN PROCESS
              </button>
            </a>
            <a
              href="https://github.com/QasHussain/Final-Fantasy-Codex-V2"
              target="_blank"
            >
              <button className="pContentContainer__textBoxButtons__btn">
                GITHUB
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
