/** @format */

import React from "react";
import "./Section6.css";
import { BsArrowRight } from "react-icons/bs";
import img1 from "../../assets/Ellipse 7.png";
import img2 from "../../assets/Ellipse 8.png";
import img3 from "../../assets/Ellipse 11.png";
import img4 from "../../assets/Ellipse 10.png";
import img5 from "../../assets/Ellipse 9.png";
import dot1 from "../../assets/Ellipse 14.svg";
import dot2 from "../../assets/Ellipse 14.svg";
import dot3 from "../../assets/Ellipse 14.svg";

const Section6 = () => {
  return (
    <section className="section6">
      <div>
        <p>Confirmation</p>
        <h1>It Is believed by so many users all around</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Exercitationem, maiores sapiente ea tenetur magnam velit non sunt
          aliquid veritatis nulla vitae obcaecati temporibus. Molestiae maxime,
          laudantium dolor delectus iste deserunt?
        </p>
        <button>
          Get Started <BsArrowRight className="arrow" />
        </button>
      </div>
      <div>
        <div className="circle">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={dot1} alt="" />
          <img src={dot2} alt="" />
          <img src={dot3} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Section6;
