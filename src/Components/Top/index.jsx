import React from "react";
import c from "./stayle.module.scss";

const Top = () => {
  return (
    <div className={c.top}>
      <p className={c.top__title}>
        Discover how you can scale your data with TechCues
      </p>
      <a className={c.top__title} href="#">
        Learn More
      </a>
    </div>
  );
};

export default Top;
