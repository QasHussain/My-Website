import React from "react";
import "./AboutPage.scss";
import { logoArray } from "../../store/logos";
import profilePic from "../../assets/ProfilePic.jpg";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

function AboutPage() {
  const linkedinClick = () => {
    window.open("https://www.linkedin.com/in/qasim-hussain-353088108/");
  };

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
          <h2 className="contentContainerQas__name">QASIM HUSSAIN</h2>
          <div className="logos">
            <ul className="logos__icons">
              <li className="logos__iconsItems">
                <span>
                  <a
                    className="icons"
                    href="https://github.com/QasHussain"
                    target="_blank"
                  >
                    <AiFillGithub />
                  </a>
                </span>
              </li>
              <li className="logos__iconsItems">
                <span>
                  <a
                    className="icons"
                    href="https://www.linkedin.com/in/qasim-hussain-353088108/"
                    target="_blank"
                  >
                    <AiFillLinkedin />
                  </a>
                </span>
              </li>
              <li className="logos__iconsItems">
                <span>
                  <a className="icons" href="mailto:Qas_24@hotmail.com">
                    <AiOutlineMail />
                  </a>
                </span>
              </li>
            </ul>
          </div>
          <p className="contentContainerQas__p">
            Junior coder with background in design and illustration. A self
            taught developer, I’ve been learning and building projects for the
            last year and have picked up a real passion for front end
            development and design. The combination of logic, problem solving
            and creativity consistently motivates me to keep creating and
            learning. Outside of coding, I’m an artist and illustrator, gamer,
            father to a 1 year old daughter and a bit of a movie nerd!
          </p>
        </div>

        <div className="contentContainerSkills">
          <div className="contentContainerSkills__grid">
            {logoArray.map((logo) => (
              <div className="border">
                <img className="img" alt="logoImage" src={logo.image} />
                <p className="txt">{logo.name.toLocaleUpperCase()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
