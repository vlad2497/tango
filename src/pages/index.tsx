//Core
import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { Grid } from "@material-ui/core";
//Custom
import Main from "./main";
import Header from "../components/navigation/header";
import AuthForm from "../components/auth/form";
import Tickets from "../components/tickets";
import { useSelector } from "../store/modules/rootReducer";

const App: React.FC = () => {
  const { info } = useSelector((state) => state.auth);
  return (
    <Grid container justify="center">
      <Grid item xs={9}>
        <Header />
        {info?.token ? <Tickets /> : <AuthForm />}
        <Switch>
          <Route path="/">
            <Main />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Grid>
    </Grid>
  );
};

export default App;
