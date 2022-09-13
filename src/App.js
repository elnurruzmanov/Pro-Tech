import React from "react";

//Routers


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
      <Home />
      <About />
      <Repair />
      <Services />
      <Clients />
      <Works />
      <Partners />
    </div>
  );
}

export default App;
