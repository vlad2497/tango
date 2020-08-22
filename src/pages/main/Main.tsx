//Core
import React from "react";
//Custom
//import { Carousel } from "../../components/ui";
//Styles
import { useStyles } from "./styles";

const Main: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.title}>Расписание уроков</div>
      {/*<Carousel />*/}
      <div className={classes.title}>Расписание мероприятий</div>
      {/*<Carousel />*/}
    </>
  );
};

export default Main;
