//Core
import React from "react";
import { Grid } from "@material-ui/core";
import { format, parseISO } from "date-fns";
//Styles
import { useStyles } from "./styles";
import { IListItem } from "../../../store/modules/tickets/reducer";

interface IProps extends IListItem {}

const Slide: React.FC<IProps> = ({
  title,
  endDate,
  lessonsLeft,
  lessonsCount,
}) => {
  const color =
    lessonsLeft === 0 || lessonsLeft === 1
      ? "red"
      : lessonsLeft === 2 || lessonsLeft === 3
      ? "yellow"
      : "linear-gradient(180deg, #68C126 0%, #1E950E 100%)";
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
