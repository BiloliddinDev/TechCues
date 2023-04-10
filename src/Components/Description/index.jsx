import React from "react";
import { DescriptionData1 } from "../Constants";
import { DescriptionData2 } from "../Constants";
import { BlueText, Heading, Left, Text, Title } from "../Texts";
import image from "../../assets/Raceta.svg";
import Button from "../Button";
import c from "./stayle.module.scss";

const Description = () => {
  return (
    <div className="container">
      <div className={c.des}>
        <div>
          <div className="row">
            <Title text={"Mobile Technology"} />
            <Left text={"View All"} />
          </div>
          <div className={c.des__cards}>
            {DescriptionData1.map((e) => (
              <div className={c.des__card} key={e.id}>
                <Text text={e.after} />
                <Title text={e.title} />
              </div>
            ))}
          </div>
        </div>
        <div className={c.des__center}>
          <img src={image} alt="" />
          <BlueText text={"Heading"} />
          <Heading heading={"Quality tech news. In your inbox. Every week."} />
          <Button full bg bady={"Email address"} />
          <Button full bady={"SUBSCRIBE"} />
        </div>
        <div>
          <div className="row">
            <Title text={"Mobile Technology"} />
            <Left text={"View All"} />
          </div>
          <div className={c.des__cards}>
            {DescriptionData2.map((e) => (
              <div className={c.des__card} key={e.id}>
                <Text text={e.after} />
                <Title text={e.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
