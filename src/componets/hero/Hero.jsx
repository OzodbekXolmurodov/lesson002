import React from "react";
import apple from "../../assets/apple-watch-series7-black-myshop-pk-1-removebg-preview 1.svg";
import "./Hero.scss";

const Hero = () => {
  return (
    <>
      <div className="hero conteaner">
        <div className="hero__contener">
          <img className="hero__img" src={apple} alt="" />
          <div className="hero__div-text">
            <h3 className="hero__h3">Apple</h3>
            <p className="hero__p">
              Apple is one of the most famous smart watches providing company.
            </p>
          </div>
        </div>
        <div className="hero__contener">
          <img className="hero__img" src={apple} alt="" />
          <div className="hero__div-text">
            <h3 className="hero__h3">Apple</h3>
            <p className="hero__p">
              Apple is one of the most famous smart watches providing company.
            </p>
          </div>
        </div>
        <div className="hero__contener">
          <img className="hero__img" src={apple} alt="" />
          <div className="hero__div-text">
            <h3 className="hero__h3">Apple</h3>
            <p className="hero__p">
              Apple is one of the most famous smart watches providing company.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
