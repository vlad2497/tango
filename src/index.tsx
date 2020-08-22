//Core
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import axios from "axios";
//Custom
import * as serviceWorker from "./serviceWorker";
import App from "./pages";
import { configureStore } from "./store";
//Styles
import "./styles/index.css";

axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
