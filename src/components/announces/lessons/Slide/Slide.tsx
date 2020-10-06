//Core
import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
//Interfaces
import { ILessonAnnounce } from "./../../../../interfaces/ILessonAnnounce";
//UI
import { DialogInfo } from "../../../ui";
//Styles
import { useStyles } from "./styles";

const getTime = (start: string, finish: string): string => {
  const startArray: string[] = start.split(" ");
  const finishArray: string[] = finish.split(" ");
  const result: string = `${startArray[1].substring(
    0,
    5
  )} - ${finishArray[1].substring(0, 5)}`;
  return result;
};

const getDate = (date: string): string => {
  const dateString: string = format(new Date(date), "dd.MM");
  const weekDay: string = format(new Date(date), "EEEE", { locale: ru });
  return `${weekDay.charAt(0).toUpperCase()}${weekDay.substring(
    1
  )} ${dateString}`;
};

interface IProps extends ILessonAnnounce {}

const Slide: React.FC<IProps> = ({
  name,
  address,
  start_date,
  end_date,
  extra_info,
}) => {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  return (
    <div className={classes.wrapper}>
      {extra_info && (
        <img
          src="/images/common/question.svg"
          className={classes.extraInfoButton}
          alt="info"
          onClick={() => setOpenDialog(true)}
        />
      )}
      <div className={classes.date}>{getDate(start_date)}</div>
      <div className={classes.time}>{getTime(start_date, end_date)}</div>
      <div className={classes.title}>{name}</div>
      <Grid container alignItems="center">
        <Grid item>
          <img src="/images/announces/compass.svg" alt="img" />
        </Grid>
        <Grid item>
          <div className={classes.address}>{address}</div>
        </Grid>
      </Grid>
      <DialogInfo
        title="Информация"
        text={extra_info || ""}
        open={openDialog}
        setOpen={setOpenDialog}
        maxWidth="sm"
      />
    </div>
  );
};

export default Slide;
