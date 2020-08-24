//Core
import React from "react";
import { Grid } from "@material-ui/core";
import { format, parseISO } from "date-fns";
//Styles
import { useStyles } from "./styles";
import { IListItem } from "../../../store/modules/tickets/reducer";

const getColor = (color: number): string => {
  return color === 0 || color === 1
    ? "linear-gradient(180deg, #F57A11 0%, #E72121 100%);"
    : color === 2 || color === 3
    ? "linear-gradient(180deg, #F5BF06 0%, #F48809 100%);"
    : "linear-gradient(180deg, #68C126 0%, #1E950E 100%)";
};

interface IProps extends IListItem {}

const Slide: React.FC<IProps> = ({
  title,
  endDate,
  lessonsLeft,
  lessonsCount,
}) => {
  const color = getColor(lessonsLeft);
  const classes = useStyles({ color });

  return (
    <Grid container className={classes.wrapper}>
      <Grid item sm={7}>
        <div className={classes.title}>{title}</div>
        <div className={classes.info}>Срок действия</div>
        <div className={classes.date}>
          {format(parseISO(endDate), "dd.MM.yyyy")}
        </div>
      </Grid>
      <Grid container justify="flex-end" alignItems="center" item sm={5}>
        <div>
          <span className={classes.lessonsLeft}>{lessonsLeft}</span>
          <span className={classes.lessonsCount}>{` / ${lessonsCount}`}</span>
        </div>
      </Grid>
      <div className={classes.upDot}></div>
      <div className={classes.downDot}></div>
    </Grid>
  );
};

export default Slide;
