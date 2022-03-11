import "./App.scss";
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
      </Background>
    </div>
  );
}

export default App;
