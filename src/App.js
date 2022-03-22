import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.scss";

import DesignProcessPage from "./components/DesignProcessPage/DesignProcessPage";

import Home from "./HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/designProcess" element={<DesignProcessPage />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
