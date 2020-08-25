//Core
import React from "react";
import { Grid } from "@material-ui/core";
import { format, parseISO } from "date-fns";
//Styles
import { useStyles } from "./styles";
import { ITicket } from "./../../../interfaces/ITicket";

const getColor = (color: number): string => {
  return color === 0 || color === 1
    ? "linear-gradient(180deg, #F57A11 0%, #E72121 100%);"
    : color === 2 || color === 3
    ? "linear-gradient(180deg, #F5BF06 0%, #F48809 100%);"
    : "linear-gradient(180deg, #68C126 0%, #1E950E 100%)";
};

interface IProps extends ITicket {}

const Slide: React.FC<IProps> = ({
  type: { name },
  ticket: {
    ticket_end_date,
    ticketCount: { lessons_count },
  },
  lessons_left,
}) => {
  const color = getColor(lessons_left);
  const classes = useStyles({ color });

  return (
    <Grid container className={classes.wrapper}>
      <Grid item sm={7}>
        <div className={classes.title}>{name}</div>
        <div className={classes.info}>Срок действия</div>
        <div className={classes.date}>
          {format(parseISO(ticket_end_date), "dd.MM.yyyy")}
        </div>
      </Grid>
      <Grid container justify="flex-end" alignItems="center" item sm={5}>
        <div>
          <span className={classes.lessonsLeft}>{lessons_left}</span>
          <span className={classes.lessonsCount}>{` / ${lessons_count}`}</span>
        </div>
      </Grid>
      <div className={classes.upDot}></div>
      <div className={classes.downDot}></div>
    </Grid>
  );
};

export default Slide;
