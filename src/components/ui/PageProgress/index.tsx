//Core
import React from "react";
import { CircularProgress } from "@material-ui/core";
//Styles
import { useStyles } from "./styles";

interface IProps {
  height: number;
}

const PageProgress: React.FC<IProps> = ({ height }) => {
  const classes = useStyles({ height });

  return (
    <div className={classes.root}>
      <CircularProgress className={classes.spinner} />
    </div>
  );
};
export default PageProgress;
