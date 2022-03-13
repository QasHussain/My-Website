import "./App.scss";
import AboutPage from "./Components/AboutPage/AboutPage";
import Background from "./Components/Background/Background";
import LandingPage from "./Components/LandingPage/LandingPage";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  const scrollDownToAbout = () => {
    console.log("hey");
  };

  return (
    <div className="App">
      <Background>
        <LandingPage scrollDown={scrollDownToAbout} />
        <NavBar />
        <AboutPage />
      </Background>
    </div>
  );
}

export default App;
