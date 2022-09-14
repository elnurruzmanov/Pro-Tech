import React from "react";
import "./Home.css";

//images
import Phone from "../../assets/images/phone.png";
import Register from "../../assets/images/register-countries.png";

const Home = () => {
  return (
    <>
      <div className="Home">
        <div className="container">
          <div className="home-info">
            <div className="home-title">
              <h1 className="home_title-info">Appliance repair. Pro Tech</h1>
            </div>

            <div className="home-form">
              <div className="call-us">
                <img src={Phone} alt="" className="Phone" />
                <h2 className="call-us_info">CALL US</h2>
              </div>
              <form className="form">
                <label className="label">
                  <input
                    className="input"
                    type="text"
                    placeholder="Name"
                    required
                  />
                </label>
                <label className="label label2">
                  <img src={Register} alt="Register" className="label-img" />
                  <p className="label-number">+1</p>
                  <input
                    className="input"
                    type="number"
                    placeholder="(999) 999-99-99"
                  />
                </label>
                <button className="home-btn">Order</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
