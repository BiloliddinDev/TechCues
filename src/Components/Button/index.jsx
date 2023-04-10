import React from "react";
import "./stayle.scss";
import classNames from "classnames";

const Button = ({ bady, bg, full }) => {
  return (
    <button className={classNames(`btn`, { praymry: bg }, { full: full })}>
      {bady}
    </button>
  );
};

export default Button;
