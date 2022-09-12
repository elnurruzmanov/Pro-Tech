import React from "react";
import "./Home.css";



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
              <form className="form">
                <input className="input" type="text" placeholder="Name" required />
                <input className="input" type="number" placeholder="(999) 999-99-99" />
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
