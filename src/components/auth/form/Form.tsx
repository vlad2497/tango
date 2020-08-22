//Core
import React, { useState } from "react";
import { Grid, Box } from "@material-ui/core";
import { useDispatch } from "react-redux";
//Custom
import { Input, Button, PageProgress } from "../../../components/ui";
import { login as _login } from "../../../store/modules/auth";
import { useSelector } from "../../../store/modules/rootReducer";
//Styles
import { useStyles } from "./styles";

const Auth: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const loginHandler = (): void => {
    dispatch(_login(login, password));
  };

  return (
    <div className={classes.container}>
      <div className={classes.title}>Авторизация</div>
      <Grid container justify="space-between" alignItems="center">
        <Grid item sm={9}>
          {loading ? (
            <PageProgress height={60} />
          ) : (
            <>
              <Box mr={1} display="inline-flex">
                <Input
                  value={login}
                  setValue={setLogin}
                  placeholder="Код(ID)"
                />
              </Box>
              <Box mr={1} display="inline-flex">
                <Input
                  value={password}
                  setValue={setPassword}
                  placeholder="Пароль"
                />
              </Box>
              <Button
                text="Войти"
                color="blue"
                size="medium"
                onClick={loginHandler}
              />
            </>
          )}
        </Grid>
        <Grid container justify="center" item sm={3}>
          <img
            src="/images/auth/Tangonoches.svg"
            alt="tango"
            className={classes.img}
          />
        </Grid>
      </Grid>
      <div className={classes.info}>
        Для входа введите код (ID) и пароль которые были вам присвоен при
        регистрации
      </div>
    </div>
  );
};

export default Auth;
