import React from "react";
import "./Works.css";

//images
import Technologies from "../../assets/images/technologies.png";

const Works = () => {
  return (
    <div className="works">
      <div className="container">
        <h1 className="works-title">How it works</h1>
        <div className="work-info">
          <div className="work-contact">
            <ul className="work-list">
              <li className="work-item">
                <h1 className="work-item_title">01</h1>
                <div className="item-contact">
                  <h4 className="contact-title">Pick An Appointment Time</h4>
                  <p className="contact-text">
                    Pick a date and time window for your professional technician
                    to arrive. Give us a call now
                    <span className="span">(323) 899 - 4038</span>
                  </p>
                </div>
              </li>
              <li className="work-item">
                <h1 className="work-item_title">02</h1>
                <div className="item-contact">
                  <h4 className="contact-title">Review An Estimate</h4>
                  <p className="contact-text">
                    Your pro will prepare an estimate to complete your repair.
                    Diagnostic fee applies if you don't move forward with the
                    repair
                  </p>
                </div>
              </li>
              <li className="work-item">
                <h1 className="work-item_title">03</h1>
                <div className="item-contact">
                  <h4 className="contact-title">Get Work Completed</h4>
                  <p className="contact-text">
                    Need a professional to fix your appliance? Still, have some
                    questions?You can give us a call or send us an email at any
                    time. We are always here to help.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="work-image">
            <img src={Technologies} alt="" className="work-images" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
