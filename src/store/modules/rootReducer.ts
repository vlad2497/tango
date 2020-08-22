//Core
import { combineReducers } from "redux";
import { useSelector as _useSelector, TypedUseSelectorHook } from "react-redux";
//Custom
import tickets from "./tickets";
import auth from "./auth";

const rootReducer = combineReducers({ tickets, auth });
export default rootReducer;

type RootState = ReturnType<typeof rootReducer>;
export const useSelector: TypedUseSelectorHook<RootState> = _useSelector;
