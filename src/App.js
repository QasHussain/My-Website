import { useRef } from "react";
import "./App.scss";
import AboutPage from "./Components/AboutPage/AboutPage";
import Background from "./Components/Background/Background";
import ContactPage from "./Components/ContactPage/ContactPage";
import DesignProcessPage from "./Components/DesignProcessPage/DesignProcessPage";
import Footer from "./Components/Footer/Footer";
import LandingPage from "./Components/LandingPage/LandingPage";
import NavBar from "./Components/NavBar/NavBar";
import ProjectsPage from "./Components/ProjectsPage/ProjectsPage";

function App() {
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

  const handleAppClick = () => {
    window.open("https://final-fantasy-codex-v2.web.app/");
  };
  const handleGitClick = () => {
    window.open("https://github.com/QasHussain/Final-Fantasy-Codex-V2");
  };

  return (
    <div className="App">
      <Background>
        {/* <DesignProcessPage /> */}

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
          <ProjectsPage appClick={handleAppClick} gitClick={handleGitClick} />
        </div>

        <div ref={scrollToContact}>
          <ContactPage />
        </div>
      </Background>

      <Footer scrollToHome={handleScrollToHome} />
    </div>
  );
}

export default App;
