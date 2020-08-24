//Core
import React from "react";
import { Grid } from "@material-ui/core";
//Custom
import { IFormattedLessonAnnounce } from "./../interfaces/IFormattedLessonAnnounce";
//Styles
import { useStyles } from "./styles";

interface IProps extends IFormattedLessonAnnounce {}

const Slide: React.FC<IProps> = ({ name, date, time, address }) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.date}>{date}</div>
      <div className={classes.time}>{time}</div>
      <div className={classes.title}>{name}</div>
      <Grid container alignItems="center">
        <Grid item>
          <img src="/images/announces/compass.svg" alt="img" />
        </Grid>
        <Grid item>
          <div className={classes.address}>{address}</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Slide;
