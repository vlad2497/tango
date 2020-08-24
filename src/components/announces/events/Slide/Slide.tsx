//Core
import React from "react";
import { Grid } from "@material-ui/core";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
//Custom
import { IEventAnnounce } from "./../../../../interfaces/IEventAnnounce";
import { serverHost } from "./../../../../externalAPI/index";
//Styles
import { useStyles } from "./styles";

const getFormattedDate = (start: string, end: string) => {
  const startArray: string[] = start.split(" ");
  const finishArray: string[] = end.split(" ");
  const day = format(new Date(start), "d MMMM", { locale: ru });
  return `${day} ${startArray[1].substring(0, 5)} - ${finishArray[1].substring(
    0,
    5
  )}`;
};

interface IProps extends IEventAnnounce {}

const Slide: React.FC<IProps> = ({
  name,
  start_date,
  end_date,
  address,
  image,
}) => {
  const classes = useStyles({
    backgroundImage: `linear-gradient(to top, #423BEB 0%, #6A57F4 30%, #5347EF 50%, rgba(105, 80, 248, 0) 100%), url(${serverHost}/${image})`,
  });
  return (
    <div className={classes.wrapper}>
      <div className={classes.date}>
        {getFormattedDate(start_date, end_date)}
      </div>
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
