/** @format */

import React from "react";
import "./Section1.css";
import { BsArrowRight } from "react-icons/bs";
import left_ss from "../../assets/iPhone 13 Pro Max - 1 1.png";
import right_ss from "../../assets/income 1.png";
import blob from "../../assets/bg_blob.svg";
import users_icon from "../../assets/users.svg";
import blob_icon from "../../assets/blob.svg";
import arrow_icon from "../../assets/arrows.svg";

const Section1 = () => {
  return (
    <section className="section1">
      <div className="section1_container">
        <div>
          <p>Your best way to store money</p>
          <h1>
            Let's assure you a more secured storage and Fast
            <span> Money Transfer</span>
          </h1>
          <p>
            Ha_Wallet is a banking website, we are more concerned on the storage
            and safety of your financial needs, its designed in a way users can
            be able to track down their expense and know much much finances are
            going out and entering, and also keep notes of their budget, keep
            daily transactions notifications and the rest of their financial
            history and status.
          </p>
          <button>
            Get Started <BsArrowRight className="arrow" />
          </button>
        </div>
        <div>
          <img src={left_ss} alt="" />
          <img src={right_ss} alt="" />
          <img src={blob} alt="" />
        </div>
      </div>

      <div className="details">
        <div>
          <img src={users_icon} alt="" />
          <div>
            <h5>User Active</h5>
            <p>300users</p>
          </div>
        </div>
        <div>
          <img src={blob_icon} alt="" />
          <div>
            <h5>Downloads</h5>
            <p>234 Downloaders</p>
          </div>
        </div>
        <div>
          <img src={arrow_icon} alt="" />
          <div>
            <h5>Transactions</h5>
            <p>456 Transactions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
