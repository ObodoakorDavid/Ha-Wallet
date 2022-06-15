/** @format */

import React from "react";
import "./Section4.css";
import graph from "../../assets/Group 10.svg";
import black_bg from "../../assets/Rectangle 6.svg";

const Section4 = () => {
  return (
    <section className="section4">
      <div>
        <p>Graphical Representation</p>
        <h1>The Graphical view of your Transaction</h1>
        <p>
          Read how your daily, monthly and yearly transactions go with
          Ha-Wallet, how your finances grow, the debit and credit and aslo your
          time of pending, awaiting and confirmed transactions.
        </p>
      </div>
      <div>
      <img src={graph} alt="" />
      <img src={black_bg} alt="" />
      </div>
    </section>
  );
};

export default Section4;
