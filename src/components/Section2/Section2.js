/** @format */

import React from "react";
import "./Section2.css";
import green_arrows from "../../assets/Frame 6.svg";
import check_icon from "../../assets/Frame 7.svg";
import charts_icons from "../../assets/Frame 8.svg";

const Section2 = () => {
  return (
    <section className="section2">
      <p>Our Best features</p>
      <h1>Our Feature</h1>
      <div className="features">
        <div>
          <img src={green_arrows} alt="" /> <h3>Bill Payment</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio unde
            at doloribus sed eum odio excepturi, rerum sit numquam sunt,
            quaerat, non accusamus nihil aspernatur quae similique vero ullam a.
          </p>
        </div>
        <div>
          <img src={check_icon} alt="" /> <h3>Withdraw Money</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio unde
            at doloribus sed eum odio excepturi, rerum sit numquam sunt,
            quaerat, non accusamus nihil aspernatur quae similique vero ullam a.
          </p>
        </div>
        <div>
          <img src={charts_icons} alt="" /> <h3>Add Card</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio unde
            at doloribus sed eum odio excepturi, rerum sit numquam sunt,
            quaerat, non accusamus nihil aspernatur quae similique vero ullam a.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section2;
