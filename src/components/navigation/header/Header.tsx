//Core
import React from "react";
import { Grid } from "@material-ui/core";
//Custom
import { Button } from "../../ui";
//Styles
import { useStyles } from "./styles";
import { useSelector } from "../../../store/modules/rootReducer";

const Header: React.FC = () => {
  const classes = useStyles();
  const auth = useSelector((state) => state.auth);

  return (
    <Grid
      container
      justify="space-between"
      className={classes.container}
      alignItems="center"
    >
      <Grid item xs={6}>
        <img src="/images/header/logo.svg" alt="logo" />
      </Grid>
      <Grid container justify="flex-end" item xs={6}>
        {auth?.info?.token && (
          <Button text="Выйти" size="small" color="dark" onClick={() => {}} />
        )}
      </Grid>
    </Grid>
  );
};

export default Header;
