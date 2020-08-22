//Core
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
//Custom
import reducers from "./modules/rootReducer";

export const configureStore = () => {
  const store = createStore(reducers, compose(applyMiddleware(thunk)));
  return store;
};
