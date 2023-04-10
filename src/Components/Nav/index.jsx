import React, { useState } from "react";
import c from "./stayle.module.scss";
import logo from "../../assets/logo__nav.svg";
import resLogo from "../../assets/Logo.svg";
import { useTranslation } from "react-i18next";
import Button from "../Button";
import classNames from "classnames";
import { Select, Space } from "antd";

const Nav = () => {
  const { t, i18n } = useTranslation();
  const handleChange = (e) => {
    i18n.changeLanguage(e);
  };

  const [shownav, setShownav] = useState(false);
  return (
    <div className={c.nav}>
      <div className={`container ${c.nav__folder}`}>
        <div className={c.nav__box}>
          <a href="./index.html">
            <img className={c.nav__images} src={logo} alt="" />
            <img className={c.nav__img} src={resLogo} alt="" />
          </a>
          <ul className={classNames(c.nav__list, { hidden: shownav })}>
            <li>
              <a className={c.nav__link} href="">
                {t("Categories")}
              </a>
            </li>
            <li>
              <a className={c.nav__link} href="">
                {t("Authors")}
              </a>
            </li>
            <li>
              <a className={c.nav__link} href="">
                {t("Template")}
              </a>
            </li>
            <Select
              defaultValue="en"
              onChange={handleChange}
              options={[
                {
                  value: "ru",
                  label: "RU",
                },
                {
                  value: "en",
                  label: "En",
                },
                {
                  value: "uz",
                  label: "Uzb",
                },
              ]}
            />
          </ul>
        </div>
        <div className={c.nav__wrap}>
          <i className="fa-solid fa-magnifying-glass"></i>
          <Button bady={"Subscribe"} />

          <div className={c.nav__bar} onClick={() => setShownav(!shownav)}>
            {shownav ? (
              <i className="fa-solid fa-bars"></i>
            ) : (
              <i className="fa-solid fa-xmark"></i>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
