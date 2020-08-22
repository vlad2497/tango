import {
  SET_TICKETS_LIST,
  SET_TICKETS_LOADING,
  SET_TICKETS_ERROR,
} from "./selectors";

export interface IListItem {
  title: string;
  endDate: string;
  lessonsLeft: number;
  lessonsCount: number;
}

export interface IState {
  list: IListItem[] | null;
  loading: boolean;
  error: string | null;
}

type ActionType =
  | {
      type: typeof SET_TICKETS_LIST;
      payload: IState["list"];
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
  error: null,
  loading: false,
};

const authReducer = (state = initialState, action: ActionType): IState => {
  switch (action.type) {
    case SET_TICKETS_LIST: {
      return { ...state, list: action.payload };
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
