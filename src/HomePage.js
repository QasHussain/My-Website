import React, { useRef } from "react";
import "./App.scss";
import AboutPage from "./components/AboutPage/AboutPage";
import Background from "./components/Background/Background";
import ContactPage from "./components/ContactPage/ContactPage";

import Footer from "./components/Footer/Footer";
import LandingPage from "./components/LandingPage/LandingPage";
import NavBar from "./components/NavBar/NavBar";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";

function Home() {
  const scrollHomeRef = useRef();
  const scrollToAbout = useRef();
  const scrollToProjects = useRef();
  const scrollToContact = useRef();

  const handleScrollToHome = () => {
    scrollHomeRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToAbout = () => {
    scrollToAbout.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToProjects = () => {
    scrollToProjects.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToContact = () => {
    scrollToContact.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Background>
      <NavBar
        scrollContact={handleScrollToContact}
        scrollAbout={handleScrollToAbout}
        scrollProjects={handleScrollToProjects}
        scrollHome={handleScrollToHome}
      />
      <div ref={scrollHomeRef}>
        <LandingPage scrollDown={handleScrollToAbout} />
      </div>
      <div ref={scrollToAbout}>
        <AboutPage />
      </div>
      <div ref={scrollToProjects}>
        <ProjectsPage />
      </div>

      <div ref={scrollToContact}>
        <ContactPage />
      </div>

      <Footer scrollToHome={handleScrollToHome} />
    </Background>
  );
}

export default Home;
