import React from "react";
import PlanningPreperation from "../../../assets/PlanningPreperation.jpg";
import "./PlanningAndPreperation.scss";

function PlanningAndPreperation() {
  return (
    <div className="designPage">
      <div className="designContainer">
        <div className="designContainer__imgBox">
          <a href="https://i.imgur.com/QiovxA9.jpg">
            <img
              src={PlanningPreperation}
              className="designContainer__imgBox__img"
              alt="PlanningPreperation"
            />
          </a>
        </div>
        <div className="designContainer__textBox">
          <h2 className="designContainer__textBox__title">
            Planning and Preparation
          </h2>
          <p className="designContainer__textBox__txt">
            The inital preparation for this applicaion involved creating a
            flowchart and moodboard in Figma. This gave me a good idea of the
            kind of functionality and user journey.
          </p>
          <p className="designContainer__textBox__txt">
            I also used various reference images so that I could explore the
            visual style of the app. I decided to aim for a classic, ps1 era
            look for the application, drawing inspiration from the the classic
            entry, Final Fantasy VII.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PlanningAndPreperation;
