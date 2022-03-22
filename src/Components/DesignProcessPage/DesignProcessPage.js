import React from "react";
import AssetDevelopment from "./AssetDevelopment/AssetDevelopment";
import PlanningAndPreperation from "./PlanningAndPreperation/PlanningAndPreperation";
import FigmaDesigns from "./FigmaDesigns/FigmaDesigns";
import "./DesignProcessPage.scss";
import Background from "../Background/Background";
import DesignFooter from "./DesignProcessPageFooter/DesignFooter";

function DesignProcessPage() {
  return (
    <div>
      <Background>
        <div className="designDescription">
          <h2 className="designDescription__title">Final Fantasy Codex</h2>
          <p className="designDescription__text">
            Final Fantasy Codex is an online, fully responsive interactive
            encyclopedia of every character in the mainline Final Fantasy video
            game series entries 6 through 15.
          </p>
          <p className="designDescription__text">
            This project was degined and built for my front-end development
            portfolio. As a long time fan of the Final Fantasy series, I wanted
            to create something different, something truly unique and personal
            to me for my first portfolio piece. I also wanted to challenge
            myself by making an API heavy application with multiple endpoints
            that looked smooth, intuitive and stylish.
          </p>
        </div>
        <PlanningAndPreperation />
        <AssetDevelopment />
        <FigmaDesigns />
        <div className="designDescription">
          <h2 className="designDescription__title">Production</h2>
          <p className="designDescription__text">
            The next step was to start coding and building the application. Due
            to the single page and reactive nature of the application I wanted
            to build, I knew the React library would be ideal for this project.
          </p>
          <p className="designDescription__text">
            I believe the work I did in planning and preparing the app was
            vital. This is a very API heavy application with a lot of endpoints,
            so I am proud that I was able to build the application that remained
            almost completely faithful to the Figma designs, as well as the
            visual and functional goals I set when planning this project.
          </p>
        </div>
        <div className="buttonContainer">
          <a
            href="https://www.figma.com/file/3u5Jpg08VsMb72I1Fj2abD/Final-Fantasy-Codex-Mock-Design2?node-id=0%3A1"
            target="_blank"
          >
            <button className="buttonContainer__btn">FIGMA PROJECT</button>
          </a>
          <a href="https://final-fantasy-codex-v2.web.app/" target="_blank">
            <button className="buttonContainer__btn">LIVE APPLICATION</button>
          </a>
          <a
            href="https://github.com/QasHussain/Final-Fantasy-Codex-V2"
            target="_blank"
          >
            <button className="buttonContainer__btn">PROJECT GITHUB</button>
          </a>
        </div>
        <DesignFooter />
      </Background>
    </div>
  );
}

export default DesignProcessPage;
