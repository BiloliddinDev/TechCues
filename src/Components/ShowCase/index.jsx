import React from "react";
import { CardData } from "../Constants";
import { BlueText, Left, Text, Title } from "../Texts";
import c from "./stayle.module.scss";

const ShowCase = () => {
  return (
    <div className="container">
      <div className={c.showcase}>
        <div className="row">
          <Title text={"Recent Articles"} />
          <Left text={"View All"} />
        </div>
        <div className={c.showcase__wrapper}>
          {CardData.map((element) => (
            <div className={c.showcase__card} key={element.id}>
              <img src={element.img} alt="" />
              <div className={c.showcase__box}>
                <BlueText text={element.text} />
                <Text text={element.after} />
                <Title text={element.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
