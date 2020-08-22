//Core
import React from "react";
//Styles
import { useStyles } from "./styles";

interface IProps {
  size: "small" | "medium";
  color: "blue" | "dark";
  text: string;
  onClick: () => void;
}

const Button: React.FC<IProps> = ({ size, color, text, onClick }) => {
  const classes = useStyles({
    size,
    color,
  });
  return (
    <button className={classes.root} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
