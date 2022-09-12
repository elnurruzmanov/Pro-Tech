import React from "react";

//Routers
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";

//components
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
