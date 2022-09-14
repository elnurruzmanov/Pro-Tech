import React from 'react'
import "./Clients.css"

//icons
import Stars from "../../assets/icons/Stars.png"





const Clients = () => {
  return (
    <div className='clients'>
      <div className="container">
        <h1 className="clients-title">See what our clients think</h1>
        <div className="clients-info">
          <ul className="clients-list">
         
            <li className="clients-item">
              <h4 className="clients-item_title">Michael Yang</h4>
              <img src={Stars} alt="" className='stars' />
              <p className="clients-item_text">We used them before to help with our leaking dishwasher. This time we needed a technician for our fringe. Tech quickly figure out the problem and swap our compressor with some special tools the same day! These guys were fast and reliable! Will definitely use them again!</p>
            </li>
         
            <li className="clients-item">
              <h4 className="clients-item_title">Michael Yang</h4>
              <img src={Stars} alt="" className='stars' />
              <p className="clients-item_text">We used them before to help with our leaking dishwasher. This time we needed a technician for our fringe. Tech quickly figure out the problem and swap our compressor with some special tools the same day! These guys were fast and reliable! Will definitely use them again!</p>
            </li>
      
            <li className="clients-item">
              <h4 className="clients-item_title">Michael Yang</h4>
              <img src={Stars} alt="" className='stars' />
              <p className="clients-item_text">We used them before to help with our leaking dishwasher. This time we needed a technician for our fringe. Tech quickly figure out the problem and swap our compressor with some special tools the same day! These guys were fast and reliable! Will definitely use them again!</p>
            </li>
           
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Clients