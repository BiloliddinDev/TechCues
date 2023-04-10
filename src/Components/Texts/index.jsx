import c from "./stayle.module.scss";

export const Heading = ({ heading }) => {
  return <h1 className={c.heading}>{heading}</h1>;
};

export const BlueText = ({ text }) => {
  return <h2 className={c.bluetext}>{text}</h2>;
};

export const Title = ({ text }) => {
  return <h3 className={c.title}>{text}</h3>;
};

export const Text = ({ text }) => {
  return <p className={c.text}>{text}</p>;
};

export const Left = ({ text }) => {
  return <span className={c.left}>{text}</span>;
};
