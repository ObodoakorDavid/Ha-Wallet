/** @format */

import React from "react";
import "./Section5.css";
import income from "../../assets/income 2.png";
import black_background from "../../assets/Rectangle 8.svg";
import arrows from "../../assets/arrows - black.svg";
import user from "../../assets/arrows - black.svg";
import download from "../../assets/arrows - black.svg";

const Section5 = () => {
  return (
    <section className="section5">
      <div>
        <img src={income} alt="" />
        <img src={black_background} alt="" />
      </div>
      <div>
        <div>
          <p>Guide On Ha_Wallet</p>
          <h1>How does it work</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
            perferendis tempora delectus. A ut illo architecto veritatis
            excepturi doloremque ducimus laborum suscipit, impedit neque
            adipisci amet, non nisi, alias nesciunt. Corrupti illum, vitae eum
            tempore hic saepe consectetur modi sapiente asperiores at totam.
          </p>
        </div>
        <div>
          <div>
            <img src={arrows} alt="" />
            <div>
              <h3>Download the App</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                asperiores omnis dolores. Nisi exercitationem qui vitae aperiam
                sapiente eos eveniet at, cum eaque optio repellendus
                dignissimos.
              </p>
            </div>
          </div>
          <div>
            <img src={arrows} alt="" />
            <div>
              <h3>Create your Account</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
                iure vero aliquam, iusto tempora soluta laboriosam vitae
                provident expedita suscipit harum itaque, et assumenda ullam.
              </p>
            </div>
          </div>
          <div>
            <img src={arrows} alt="" />
            <div>
              <h3>Top-Up or Transfer</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto earum ipsum obcaecati neque mollitia esse repellat
                corrupti culpa quia, aut cum modi ea fuga voluptatem, sapiente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
