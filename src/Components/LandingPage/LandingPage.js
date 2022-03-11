import React from "react";
import "./LandingPage.scss";
import { AiOutlineArrowDown } from "react-icons/ai";

function LandingPage({ scrollDown }) {
  return (
    <div className="landingPage">
      <div className="landingPage__container">
        <h1 className="landingPage__container__title">
          Hi, I'm <span className="nameSpan">Qas</span>.
        </h1>
        <h1 className="landingPage__container__title">
          Im a junior front end developer.
        </h1>
        <button onClick={scrollDown} className="landingPage__container__button">
          View my work <AiOutlineArrowDown />
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
