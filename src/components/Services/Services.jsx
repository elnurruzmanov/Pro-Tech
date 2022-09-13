import React from "react";
import "./Services.css";

//images
import Service from "../../assets/images/Services-image.png";

//icons
import Hat from "../../assets/icons/hat.png";
import Garant from "../../assets/icons/Garant.png";
import Prices from "../../assets/icons/Prices.png";
import Like from "../../assets/icons/Like.png";

//React Reveal
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <Flip right>
          <h1 className="services-title">Our advantage</h1>
        </Flip>
        <div className="services-info">
          <div className="services-image">
            <Fade left>
              <img src={Service} alt="" className="services-img" />
            </Fade>
          </div>

          <div className="services-types">
            <Fade right>
              <ul className="services-list">
                <li className="services-item item1">
                  <img src={Hat} alt="" className="services-img" />
                  <h4 className="services-item_title">Professionals</h4>
                  <p className="services-item-text">
                    Experienced craftsmen with extensive experience-fast,
                    efficient and friendly.
                  </p>
                </li>
                <li className="services-item item2">
                  <img src={Garant} alt="" className="services-img" />
                  <h4 className="services-item_title">Guarantee</h4>
                  <p className="services-item-text">
                    2 months to work and spare parts-1 year
                  </p>
                </li>
                <li className="services-item item3">
                  <img src={Prices} alt="" className="services-img" />
                  <h4 className="services-item_title">Great price</h4>
                  <p className="services-item-text">
                    Nice prices for everyone!
                  </p>
                </li>
                <li className="services-item item4">
                  <img src={Like} alt="" className="services-img" />
                  <h4 className="services-item_title">High Quality</h4>
                  <p className="services-item-text">
                    Qualitatively perform all the work.Save your time, money and
                    aggravation.
                  </p>
                </li>
              </ul>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
