import React from "react";
import image from "../../assets/information__img.png";
import { Heading, Left, Text, Title } from "../Texts";
import { InfarmationData } from "../Constants";
import c from "./stayle.module.scss";

const Information = () => {
  return (
    <div className="container">
      <div className={c.info}>
        <div className="row">
          <Text text={"Case Studies"} />
          <Left text={"View All"} />
        </div>
        <div className={c.info__wrapper}>
          <div className={c.info__folder}>
            <img src={image} alt="" />
            <div className={c.info__data}>
              <Text text={"Adell Jacobi"} />
              <Heading
                heading={"Drive Efficient Growth with Integrated Data"}
              />
            </div>
          </div>
          <div className={c.info__box}>
            {InfarmationData?.map((e) => (
              <span className={c.info__card}>
                <Text text={e?.after} />
                <Title text={e?.title} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
