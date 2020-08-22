//Core
import React from "react";
import { Grid } from "@material-ui/core";
//Custom
import { Button } from "../../ui";
//Styles
import { useStyles } from "./styles";

const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="space-between"
      className={classes.container}
      alignItems="center"
    >
      <Grid item sm={6}>
        <img src="/images/header/logo.svg" alt="logo" />
      </Grid>
      <Grid container justify="flex-end" item sm={6}>
        <Button text={"Войти"} size="small" color="dark" onClick={() => {}} />
      </Grid>
    </Grid>
  );
};

export default Header;
