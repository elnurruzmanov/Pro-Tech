import React from "react";

//Routers
import { Routes, Route } from "react-router-dom";


//components
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Repair from "./components/Repair/Repair";
import Services from "./components/Services/Services";
import Clients from "./components/Clients/Clients";
import Works from "./components/Works/Works";
import Partners from "./components/Partners/Partners";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/" element={<About />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Repair />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Services />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Clients />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Works />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Partners />} />
      </Routes>
    </div>
  );
}

export default App;
