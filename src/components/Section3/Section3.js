/** @format */

import React from "react";
import "./Section3.css";
import screenshot from "../../assets/dark_ss.png";
import appStore from "../../assets/appstore.png";
import playStore from "../../assets/playstore.png";

const Section3 = () => {
  return (
    <section className="section3">
      <img src={screenshot} alt="" />
      <div>
        <p className="electronic">Electronic money platform</p>
        <h1>
          <span>E-Money</span> platform to make transaction easier for users
        </h1>
        <p>
          Ha_Wallet is a very relative storage of money for our everyday
          transactions for example, payment of cable tvs and Nepa bills
        </p>
        <p className="available">Available on PlayStore and Apple Store</p>
        <div className="stores">
          <img src={appStore} alt="" />
          <img src={playStore} alt="" />
        </div>
        <div className="rating">
          <p>Mr Femi Owolabi Adesina</p>
          <p>⭐⭐⭐⭐⭐</p>
          <p>
            Ha_Wallet is a very conveinient and very comfotrable app it makes me
            track my daily finances and my monthly budget
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section3;
