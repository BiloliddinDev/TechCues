import React from "react";
import { BlueText, Heading } from "../Texts";
import Button from "../Button";
import c from "./stayle.module.scss";

const Elbook = () => {
  return (
    <div className="container">
      <div className={c.ebook}>
        <div className={c.ebook__wrapper}>
          <BlueText text={"Free ebook"} />
          <Heading
            heading={"5 Things You Can Do Right Now to Speed up Your Workflow"}
          />
        </div>
        <div className={c.ebook__box}>
          <Button full bg bady={"Email address"} />
          <Button full bady={"SUBSCRIBE"} />
        </div>
      </div>
    </div>
  );
};

export default Elbook;
