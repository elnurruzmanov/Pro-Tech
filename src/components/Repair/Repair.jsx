import React from "react";
import "./Repair.css";

//React-Router-Dom
import { Link } from "react-router-dom";

//images
import Commercial from "../../assets/images/commercial-refregerators.png";
import Freezers from "../../assets/images/Freezers.png";
import Freezer from "../../assets/images/Freezer.png";
import Washers from "../../assets/images/Washers.png";
import Stoves from "../../assets/images/Stoves.png";
import Dishvashers from "../../assets/images/Dishvashers.png";
import Cooler from "../../assets/images/Cooler.png";
import Ice from "../../assets/images/Ice-makers.png";
import Coolers from "../../assets/images/Coolers.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const Repair = () => {
  return (
    <div className="repair">
      <div className="container">
        <h1 className="repair-title">What are we repairing?</h1>
        <ul className="repair-list">
          <li className="repair-item">
            <h3 className="repair-item_info">Commercial Refrigerators</h3>
            <img src={Commercial} alt="" className="household-appliances" />
            <Link to="/" className="repair-item_link">
              Learn more
            </Link>
          </li>
          <li className="repair-item">
            <h3 className="repair-item_info">Commercial Freezers</h3>
            <img src={Freezers} alt="" className="household-appliances" />
            <Link to="/" className="repair-item_link">
              Learn more
            </Link>
          </li>
          <li className="repair-item">
            <h3 className="repair-item_info">Refrigerators</h3>
            <img src={Freezer} alt="" className="household-appliances" />
            <Link to="/" className="repair-item_link">
              Learn more
            </Link>
          </li>

          <li className="repair-item">
            <h3 className="repair-item_info">Washers / Dryers</h3>
            <img src={Washers} alt="" className="household-appliances" />
            <Link to="/" className="repair-item_link">
              Learn more
            </Link>
          </li>
          <li className="repair-item">
            <h3 className="repair-item_info">Stoves</h3>
            <img src={Stoves} alt="" className="household-appliances" />
            <Link to="/" className="repair-item_link">
              Learn more
            </Link>
          </li>
          <li className="repair-item">
            <h3 className="repair-item_info">Dishwashers</h3>
            <img src={Dishvashers} alt="" className="household-appliances" />
            <Link to="/" className="repair-item_link">
              Learn more
            </Link>
          </li>

          <li className="repair-item">
            <h3 className="repair-item_info">Wine Cooler</h3>
            <img src={Cooler} alt="" className="household-appliances" />
            <Link to="/" className="repair-item_link">
              Learn more
            </Link>
          </li>
          <li className="repair-item">
            <h3 className="repair-item_info">Commercial Ice Makers</h3>
            <img src={Ice} alt="" className="household-appliances" />
            <Link to="/" className="repair-item_link">
              Learn more
            </Link>
          </li>
          <li className="repair-item">
            <h3 className="repair-item_info">Coolers</h3>
            <img src={Coolers} alt="" className="household-appliances" />
            <Link to="/" className="repair-item_link">
              Learn more
            </Link>
          </li>
        </ul>
        <div className="repair-swiper">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <li className="repair-item">
                <h3 className="repair-item_info">Commercial Refrigerators</h3>
                <img src={Commercial} alt="" className="household-appliances" />
                <Link to="/" className="repair-item_link">
                  Learn more
                </Link>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className="repair-item">
                <h3 className="repair-item_info">Commercial Freezers</h3>
                <img src={Freezers} alt="" className="household-appliances" />
                <Link to="/" className="repair-item_link">
                  Learn more
                </Link>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className="repair-item">
                <h3 className="repair-item_info">Refrigerators</h3>
                <img src={Freezer} alt="" className="household-appliances" />
                <Link to="/" className="repair-item_link">
                  Learn more
                </Link>
              </li>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="repair-swiper">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <li className="repair-item">
                <h3 className="repair-item_info">Washers / Dryers</h3>
                <img src={Washers} alt="" className="household-appliances" />
                <Link to="/" className="repair-item_link">
                  Learn more
                </Link>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className="repair-item">
                <h3 className="repair-item_info">Stoves</h3>
                <img src={Stoves} alt="" className="household-appliances" />
                <Link to="/" className="repair-item_link">
                  Learn more
                </Link>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className="repair-item">
                <h3 className="repair-item_info">Dishwashers</h3>
                <img
                  src={Dishvashers}
                  alt=""
                  className="household-appliances"
                />
                <Link to="/" className="repair-item_link">
                  Learn more
                </Link>
              </li>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="repair-swiper">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <li className="repair-item">
                <h3 className="repair-item_info">Wine Cooler</h3>
                <img src={Cooler} alt="" className="household-appliances" />
                <Link to="/" className="repair-item_link">
                  Learn more
                </Link>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className="repair-item">
                <h3 className="repair-item_info">Commercial Ice Makers</h3>
                <img src={Ice} alt="" className="household-appliances" />
                <Link to="/" className="repair-item_link">
                  Learn more
                </Link>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className="repair-item">
                <h3 className="repair-item_info">Coolers</h3>
                <img src={Coolers} alt="" className="household-appliances" />
                <Link to="/" className="repair-item_link">
                  Learn more
                </Link>
              </li>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Repair;
