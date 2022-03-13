import React from "react";
import "./AboutPage.scss";
import { logoArray } from "../../store/logos";
import profilePic from "../../assets/ProfilePic.jpg";

function AboutPage() {
  return (
    <div className="aboutPage">
      <div className="titleContainer">
        <h1 className="titleContainer__title">About</h1>
        <div className="titleContainer__border"></div>
      </div>
      <div className="contentContainer">
        <div className="contentContainerQas">
          <img
            src={profilePic}
            alt="ProfilePic"
            className="contentContainerQas__img"
          />
          <h2 className="contentContainerQas__name">Qasim Hussain</h2>
          <p className="contentContainerQas__p">Hooby Gooby</p>
        </div>
        <div className="contentContainerSkills">
          <div className="contentContainerSkills__grid">
            {logoArray[0].name}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
