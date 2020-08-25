//Core
import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import axios from "axios";
//Custom
import { Button, Dialog } from "../../ui";
import { useSelector } from "../../../store/modules/rootReducer";
import { setAuthInfo } from "../../../store/modules/auth";
//Styles
import { useStyles } from "./styles";

const Header: React.FC = () => {
  const classes = useStyles();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [openDialog, setOpenDialog] = useState(false);

  const dialogHandler = (): void => {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.clear();
    setOpenDialog(false);
    dispatch(setAuthInfo(null));
  };

  return (
    <>
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
            <Button
              text="Выйти"
              size="small"
              color="dark"
              onClick={() => {
                setOpenDialog(true);
              }}
            />
          )}
        </Grid>
        <Dialog
          title="Внимание !"
          text="Вы уверены что хотите выйти из аккаунта ?"
          open={openDialog}
          setOpen={setOpenDialog}
          onClick={dialogHandler}
        />
      </Grid>
    </>
  );
};

export default Header;
