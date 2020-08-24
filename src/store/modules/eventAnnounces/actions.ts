//Core
import { ThunkAction } from "redux-thunk";
//Custom
import {
  SET_EVENT_ANNOUNCES_LIST,
  SET_EVENT_ANNOUNCES_LOADING,
  SET_EVENT_ANNOUNCES_ERROR,
} from "./selectors";
import { IState } from "./reducer";
import { getEvents } from "./../../../externalAPI/announces/events";
import { IEventAnnounce } from "./../../../interfaces/IEventAnnounce";

//actions creators
export const setEventAnnouncesList = (payload: IState["list"]) => ({
  type: SET_EVENT_ANNOUNCES_LIST,
  payload,
});

export const setEventAnnouncesLoading = (payload: IState["loading"]) => ({
  type: SET_EVENT_ANNOUNCES_LOADING,
  payload,
});

export const setEventAnnouncesError = (payload: IState["error"]) => ({
  type: SET_EVENT_ANNOUNCES_ERROR,
  payload,
});

//thunk
export const getEventAnnounces = (): ThunkAction<
  void,
  IState,
  unknown,
  any
> => {
  return async (dispatch: any) => {
    try {
      dispatch(setEventAnnouncesLoading(true));
      const events: IEventAnnounce[] = await getEvents();
      dispatch(setEventAnnouncesList(events));
      dispatch(setEventAnnouncesLoading(false));
    } catch (error) {
      alert(error.response.data.message);
      dispatch(setEventAnnouncesError(error.response.data.message));
      dispatch(setEventAnnouncesLoading(false));
    }
  };
};
