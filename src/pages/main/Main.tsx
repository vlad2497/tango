//Core
import React from "react";
//Custom
import Lessons from "./../../components/announces/lessons/Lessons";
import Events from "./../../components/announces/events/Events";
//Styles
import { useStyles } from "./styles";

const Main: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.title}>Расписание уроков</div>
      <Lessons />
      <div className={classes.title}>Расписание мероприятий</div>
      <Events />
      <div className={classes.footer}></div>
    </>
  );
};

export default Main;
