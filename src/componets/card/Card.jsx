import React from "react";
import "./Card.scss";
import card from "../../assets/Frame 5.svg";
import card2 from "../../assets/6426000_sd-removebg-preview 1.png";
import card3 from "../../assets/6426000_sd-removebg-preview1.png";
import card4 from "../../assets/Dots.svg";
import card5 from "../../assets/MKUQ3_VW_34FR+watch-45-alum-midnight-nc-7s_VW_34FR_WF_CO-removebg-preview1.svg";

const Card = () => {
  return (
    <>
      <div className="conteaner card">
        <p className="card__p">Here are our some of the best clients.</p>
        <h2 className="card__h2">What People Say About Us</h2>
        <div className="card__main-div">
          <div className="card__div">
            <img className="card__img" src={card2} alt="" />
            <div className="card__div-text">
              <h3 className="card__h3">Hamza Faizi</h3>
              <p className="card__p-2">
                Don’t waste time, just order! This is the best website to
                puschase smart watches.
              </p>
              <img className="card__stras" src={card} alt="" />
            </div>
          </div>
          <div className="card__div">
            <img className="card__img" src={card3} alt="" />
            <div className="card__div-text">
              <h3 className="card__h3">Hafiz Huzaifa</h3>
              <p className="card__p-2">
                I’ve been purchasing smart watches of Mohid for a long time. All
                the products are good quality.
              </p>
              <img className="card__stras" src={card} alt="" />
            </div>
          </div>
        </div>
        <img className="card__bezak" src={card4} alt="" />

        <div className="card__pro">
          <div className="card__div-rght">
            <h2 className="card__h2-main">Subscribe To Newsletter</h2>
            <p className="card__p-main">
              Get free guide about smart watches daily.{" "}
            </p>
            <div className="card-div-inoput">
              <input
                className="card__input"
                placeholder="Enter Email Address"
                type="text"
              />
              <button className="card__btn">Subscribe</button>
            </div>
          </div>
          <div className="card__div-left">
            <img className="card__main-img" src={card5} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
