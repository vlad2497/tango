//Core
import React from "react";
//Styles
import { useStyles } from "./styles";

interface IProps {
  count: number;
}

const Points: React.FC<IProps> = ({ count }) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.label}>У вас есть</div>
      <div className={classes.value}>{count} баллов</div>
    </div>
  );
};

export default Points;
