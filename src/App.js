import React, { useRef, useState } from "react";
import {
  Route,
  Router,
  Routes,
  NavLink,
  BrowserRouter,
} from "react-router-dom";
import "./App.scss";

import DesignProcessPage from "./Components/DesignProcessPage/DesignProcessPage";

import Home from "./HomePage";

function App() {
  const handleFigmaClick = () => {
    window.open(
      "https://www.figma.com/file/3u5Jpg08VsMb72I1Fj2abD/Final-Fantasy-Codex-Mock-Design2?node-id=0%3A1"
    );
  };
  const handleAppClick = () => {
    window.open("https://final-fantasy-codex-v2.web.app/");
  };
  const handleGitClick = () => {
    window.open("https://github.com/QasHussain/Final-Fantasy-Codex-V2");
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/designProcess"
            element={
              <DesignProcessPage
                figmaClick={handleFigmaClick}
                appClick={handleAppClick}
                gitClick={handleGitClick}
              />
            }
          />
        </Routes>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
