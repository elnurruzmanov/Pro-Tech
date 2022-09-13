import React from "react";
import "./Partners.css";

//Link react-router-dom
import { Link } from "react-router-dom";

//icons
import Lg from "../../assets/icons/lg.svg";
import Viking from "../../assets/icons/viking.svg";
import Subzero from "../../assets/icons/subzero.svg";
import Wolf from "../../assets/icons/Wolf.svg";
import Maytag from "../../assets/icons/Maytag.svg";
import Kenmore from "../../assets/icons/Kenmore.svg";
import Electrolux from "../../assets/icons/Electrolux.svg";
import Whirpool from "../../assets/icons/Whirpool.svg";
import Frigidaire from "../../assets/icons/Frigidaire.svg";
import Kitchen from "../../assets/icons/Kitchen.svg";
import Air from "../../assets/icons/Jenn-air.svg";
import Samsung from "../../assets/icons/Samsung.svg";

//React Reveal
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";

const Partners = () => {
  return (
    <div className="partners">
      <div className="container">
        <hr className="hr" />
        <Zoom right>
          <h1 className="partners-title">Our partners</h1>
        </Zoom>
        <ul className="partners-list">
          <Bounce left>
            <li className="partners-item">
              <Link to="/">
                <img src={Lg} alt="lg" />
              </Link>
            </li>
            <li className="partners-item">
              <Link to="/">
                <img src={Viking} alt="viking" />
              </Link>
            </li>
            <li className="partners-item">
              <Link to="/">
                <img src={Subzero} alt="subzero" />
              </Link>
            </li>
          </Bounce>
          <Bounce right>
            <li className="partners-item">
              <Link to="/">
                <img src={Wolf} alt="wolf" />
              </Link>
            </li>
            <li className="partners-item">
              <Link to="/">
                <img src={Maytag} alt="maytag" />
              </Link>
            </li>
            <li className="partners-item">
              <Link to="/">
                <img src={Kenmore} alt="kenmore" />
              </Link>
            </li>
          </Bounce>
          <Bounce left>
            <li className="partners-item">
              <Link to="/">
                <img src={Electrolux} alt="electrolux" />
              </Link>
            </li>
            <li className="partners-item">
              <Link to="/">
                <img src={Whirpool} alt="whirlpool" />
              </Link>
            </li>
            <li className="partners-item">
              <Link to="/">
                <img src={Frigidaire} alt="Frigidaire" />
              </Link>
            </li>
          </Bounce>
          <Bounce right>
            <li className="partners-item">
              <Link to="/">
                <img src={Kitchen} alt="Frigidaire" />
              </Link>
            </li>
            <li className="partners-item">
              <Link to="/">
                <img src={Air} alt="Air" />
              </Link>
            </li>
            <li className="partners-item">
              <Link to="/" className="partners-link">
                <img src={Samsung} alt="Samsung" />
              </Link>
            </li>
          </Bounce>
        </ul>
        <hr className="hr" />
      </div>
    </div>
  );
};

export default Partners;
