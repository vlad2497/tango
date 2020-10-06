//Core
import { ThunkAction } from "redux-thunk";
//Custom
import {
  SET_TICKETS_LIST,
  SET_TICKETS_LOADING,
  SET_TICKETS_ERROR,
  SET_POINTS,
} from "./selectors";
import { IState } from "./reducer";
import { getStudentInfo as _getStudentInfo } from "./../../../externalAPI/studentInfo/index";

//actions creators
export const setTicketsList = (payload: IState["list"]) => ({
  type: SET_TICKETS_LIST,
  payload,
});

export const setPoints = (payload: IState["points"]) => ({
  type: SET_POINTS,
  payload,
});

export const setTicketsLoading = (payload: IState["loading"]) => ({
  type: SET_TICKETS_LOADING,
  payload,
});

export const setTicketsError = (payload: IState["error"]) => ({
  type: SET_TICKETS_ERROR,
  payload,
});

//thunk
export const getStudentInfo = (): ThunkAction<void, IState, unknown, any> => {
  return async (dispatch: any) => {
    try {
      dispatch(setTicketsLoading(true));
      const info = await _getStudentInfo();
      dispatch(setTicketsList(info.tickets));
      dispatch(setPoints(info.points));
      dispatch(setTicketsLoading(false));
    } catch (error) {
      alert(error.response.data.message);
      dispatch(setTicketsError(error.response.data.message));
      dispatch(setTicketsLoading(false));
    }
  };
};
