//Core
import React from "react";
import { Grid } from "@material-ui/core";
//Styles
import { useStyles } from "./styles";

interface IProps {
  text: string;
}

const NotAnnounces: React.FC<IProps> = ({ text }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={classes.noEventsWrapper}
    >
      <Grid item sm={12}>
        <img src="/images/announces/not.svg" alt="img" />
      </Grid>
      <Grid item sm={12} className={classes.noEventsText}>
        {text}
      </Grid>
    </Grid>
  );
};

export default NotAnnounces;
