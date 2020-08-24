//Core
import { combineReducers } from "redux";
import { useSelector as _useSelector, TypedUseSelectorHook } from "react-redux";
//Custom
import tickets from "./tickets";
import auth from "./auth";
import lessonAnnounces from "./lessonAnnounces";
import eventAnnounces from "./eventAnnounces";

const rootReducer = combineReducers({
  tickets,
  auth,
  lessonAnnounces,
  eventAnnounces,
});
export default rootReducer;

type RootState = ReturnType<typeof rootReducer>;
export const useSelector: TypedUseSelectorHook<RootState> = _useSelector;
