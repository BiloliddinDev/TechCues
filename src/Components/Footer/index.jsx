import React from "react";
import Image from "../../assets/Footer__img.png";
import Icon from "../../assets/footer__icon.png";
import { Heading } from "../Texts";
import Button from "../Button";
import c from "./stayle.module.scss";

const Footer = () => {
  return (
    <div className={c.footer}>
      <div className="container">
        <div>
          <div>
            <img src={Image} alt="" />
            <ul>
              <li>
                <a href="">
                  <img src={Icon} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={Icon} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={Icon} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={Icon} alt="" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <h3>Categories</h3>
              <li>
                <a href="">Case Studies</a>
              </li>
              <li>
                <a href="">Mobile Technology</a>
              </li>
              <li>
                <a href="">Data Insights</a>
              </li>
            </ul>
            <ul>
              <h3>Template</h3>
              <li>
                <a href="">Style Guide</a>
              </li>
              <li>
                <a href="">License</a>
              </li>
              <li>
                <a href="">Change Log</a>
              </li>
            </ul>
          </div>
          <div>
            <Heading heading={"Quality tech news In your inbox. Every week."} />
            <Button bg bady={"Email address"} />
            <Button bady={"SUBSCRIBE"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
