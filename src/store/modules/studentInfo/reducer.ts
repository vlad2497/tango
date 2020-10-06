import {
  SET_TICKETS_LIST,
  SET_POINTS,
  SET_TICKETS_LOADING,
  SET_TICKETS_ERROR,
} from "./selectors";
import { ITicket } from "./../../../interfaces/ITicket";

export interface IState {
  list: ITicket[] | null;
  points: number | 0;
  loading: boolean;
  error: string | null;
}

type ActionType =
  | {
      type: typeof SET_TICKETS_LIST;
      payload: IState["list"];
    }
  | {
      type: typeof SET_POINTS;
      payload: IState["points"];
    }
  | {
      type: typeof SET_TICKETS_LOADING;
      payload: IState["loading"];
    }
  | {
      type: typeof SET_TICKETS_ERROR;
      payload: IState["error"];
    };

const initialState: IState = {
  list: null,
  points: 0,
  error: null,
  loading: false,
};

const authReducer = (state = initialState, action: ActionType): IState => {
  switch (action.type) {
    case SET_TICKETS_LIST: {
      return { ...state, list: action.payload };
    }
    case SET_POINTS: {
      return { ...state, points: action.payload };
    }
    case SET_TICKETS_LOADING: {
      return { ...state, loading: action.payload };
    }
    case SET_TICKETS_ERROR: {
      return { ...state, error: action.payload };
    }
    default:
      return state;
  }
};

export default authReducer;
