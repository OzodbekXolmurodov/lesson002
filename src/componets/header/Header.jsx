import "./Header.scss";
import React from "react";
import rasim from "../../assets/Logo.svg";
import rasim2 from "../../assets/Group 1.svg";
import rasim3 from "../../assets/Group 5.svg";
import rasim6 from "../../assets/17b2724d5bd682148b44a88441cad7bfa9fe6730_original-removebg-preview 1.svg";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="conteaner">
          <div className="header__div-text">
            <img src={rasim} alt="" />
            <ul className="header__ul">
              <li className="header__li">Home</li>
              <li className="header__li">Brands</li>
              <li className="header__li">Recent Products</li>
              <li className="header__li">Contact</li>
              <li className="header__li">About</li>
            </ul>
            <img src={rasim2} alt="" />
          </div>
          <div className="header__div-main">
            <div className="header__div-rght">
              <h1 className="header__h1">Discover Most Suitable Watches</h1>
              <p className="header__p">
                Find the best, reliable, and cheap smart watches here. We focus
                on product quality. Here you can find smart watches of almost
                all brands. So why you are waiting? Just order now!
              </p>
              <div className="header__div-samll">
                <input
                  className="header__input"
                  placeholder="Find the best brands"
                  type="text"
                />
                <button className="header__btn">Search</button>
                <img className="header__img-btn" src={rasim3} alt="" />
              </div>
            </div>
            <div className="header__div-left">
              <img className="header__main-img" src={rasim6} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
