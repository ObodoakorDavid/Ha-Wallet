/** @format */

import React from "react";
import "./Footer.css";
import { ImFacebook } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import ha_logo from "../../assets/Ha_Wallet.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={ha_logo} alt="" />
      <div className="footer_details">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          reprehenderit aspernatur! Cum qui ullam earum, non hic illo tempora
          odit quae! Nulla, perspiciatis! Quo ducimus, ullam commodi amet alias
          vero.
        </p>
        <div>
          <h3>Menu</h3>
          <p>About</p>
          <p>About</p>
          <p>About</p>
          <p>About</p>
          <p>About</p>
          <p>About</p>
          <p>About</p>
        </div>
        <div>
          <h3>Feature</h3>
          <p>Behance</p>
          <p>LinkedIn</p>
          <p>Twitter</p>
          <p>Facebook</p>
          <p>Medium</p>
        </div>
        <div>
          <h3>Stay Updated</h3>
          <p>Number: 09039439201</p>
          <p>mail: Onasanya1996@gmail.com</p>
        </div>
      </div>
      <div>
        <ImFacebook className="icons" />
        <BsInstagram className="icons" />
        <BsTwitter className="icons" />
        <GrLinkedinOption className="icons" />
      </div>
      <p className="all_rights">
        All Rights Reserverd || Ha_Wallet 2022 || Designed By
        <a href="https://behance.net/onasanyahabeeb1">ONASANYA HABEEB</a>
      </p>
    </footer>
  );
};

export default Footer;
