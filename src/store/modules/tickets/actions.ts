//Core
import { ThunkAction } from "redux-thunk";
//Custom
import {
  SET_TICKETS_LIST,
  SET_TICKETS_LOADING,
  SET_TICKETS_ERROR,
} from "./selectors";
import { IState, IListItem } from "./reducer";
import {
  getTicketsList as _getTicketsList,
  ITicketItem,
} from "./../../../externalAPI/tickets/index";

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
export const getTicketsList = (
  bar_code: string
): ThunkAction<void, IState, unknown, any> => {
  return async (dispatch: any) => {
    try {
      dispatch(setTicketsLoading(true));
      const list: ITicketItem[] = await _getTicketsList(bar_code);
      const newList: IState["list"] = [
        ...list.map(
          (item: ITicketItem): IListItem => {
            const newItem: IListItem = {
              title: item.type.name,
              endDate: item.ticket.ticket_end_date,
              lessonsLeft: item.lessons_left,
              lessonsCount: item.ticket.ticketCount.lessons_count,
            };
            return newItem;
          }
        ),
      ];
      dispatch(setTicketsList(newList));
      dispatch(setTicketsLoading(false));
    } catch (error) {
      alert(error.response.data.message);
      dispatch(setTicketsError(error.response.data.message));
      dispatch(setTicketsLoading(false));
    }
  };
};
