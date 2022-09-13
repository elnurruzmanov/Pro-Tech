import React from "react";
import "./About.css";

//React Reveal

import Rotate from "react-reveal/Rotate";
import Fade from 'react-reveal/Fade';

const About = () => {
  return (
    <div className="About">
      <div className="container">
        <div className="About-info">
          <div className="about-title">
            <Rotate top left>
              <h1 className="about">About</h1>
            </Rotate>
          </div>
          <div className="about-text">
          <Fade right>
            <p className="about-texts">
              Appliance Service and Repair. Heating and Air Conditioning (HVAC)
              Service and Repair Appliances:Commercial Refrigerators,Commercial
              Freezers,Washers / Dryers, Stoves ,Wine Cooler, Commercial Ice
              Makers,Coolers and A/C (HVAC) Service and Repair are specialties
              VP Reliable Appliance Service provides in the city of Los Angeles
              Area Repairs, restorations, welding, rewiring, seal system
              compressor, and other services are our specialties for both
              commercial and residential projects.
            </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
