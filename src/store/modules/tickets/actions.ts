//Core
import { ThunkAction } from "redux-thunk";
//Custom
import {
  SET_TICKETS_LIST,
  SET_TICKETS_LOADING,
  SET_TICKETS_ERROR,
} from "./selectors";
import { IState } from "./reducer";
import { getTicketsList as _getTicketsList } from "./../../../externalAPI/tickets/index";
import { ITicket } from "./../../../interfaces/ITicket";

//actions creators
export const setTicketsList = (payload: IState["list"]) => ({
  type: SET_TICKETS_LIST,
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
export const getTicketsList = (): ThunkAction<void, IState, unknown, any> => {
  return async (dispatch: any) => {
    try {
      dispatch(setTicketsLoading(true));
      const list: ITicket[] = await _getTicketsList();
      dispatch(setTicketsList(list));
      dispatch(setTicketsLoading(false));
    } catch (error) {
      alert(error.response.data.message);
      dispatch(setTicketsError(error.response.data.message));
      dispatch(setTicketsLoading(false));
    }
  };
};
