import "./App.scss";
import AboutPage from "./Components/AboutPage/AboutPage";
import Background from "./Components/Background/Background";
import ContactPage from "./Components/ContactPage/ContactPage";
import LandingPage from "./Components/LandingPage/LandingPage";
import NavBar from "./Components/NavBar/NavBar";
import ProjectsPage from "./Components/ProjectsPage/ProjectsPage";

function App() {
  const scrollDownToAbout = () => {
    console.log("hey");
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
        <LandingPage scrollDown={scrollDownToAbout} />
        <NavBar />
        <AboutPage />
        <ProjectsPage appClick={handleAppClick} gitClick={handleGitClick} />
        <ContactPage />
      </Background>
    </div>
  );
}

export default App;
