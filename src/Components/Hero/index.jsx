import React from "react";
import c from "./stayle.module.scss";
import image from "../../assets/hero__image.png";
import { BlueText, Heading, Text, Title } from "../Texts";

const Hero = () => {
  return (
    <div className="container">
      <div className={c.hero}>
        <div className={c.hero__wrapper}>
          <div className={c.hero__left}>
            <BlueText text={"Mobile Technology"} />
            <Heading
              heading={
                "Technology in Sales: How Data is Powering Purchase Decisions"
              }
            />
            <Title text={"Milford Smith"} />
            <Text text={"February 12, 2021"} />
          </div>
          <img className={c.hero__image} src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
