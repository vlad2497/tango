import { SET_AUTH_INFO, SET_AUTH_LOADING, SET_AUTH_ERROR } from "./selectors";

export interface IState {
  info: {
    token: string;
  } | null;
  loading: boolean;
  error: string | null;
}

type ActionType =
  | {
      type: typeof SET_AUTH_INFO;
      payload: IState["info"];
    }
  | {
      type: typeof SET_AUTH_LOADING;
      payload: IState["loading"];
    }
  | {
      type: typeof SET_AUTH_ERROR;
      payload: IState["error"];
    };

const initialState: IState = {
  info: {
    token: localStorage.getItem("token") || "",
  },
  error: null,
  loading: false,
};

const authReducer = (state = initialState, action: ActionType): IState => {
  switch (action.type) {
    case SET_AUTH_INFO: {
      return { ...state, info: action.payload };
    }
    case SET_AUTH_LOADING: {
      return { ...state, loading: action.payload };
    }
    case SET_AUTH_ERROR: {
      return { ...state, error: action.payload };
    }
    default:
      return state;
  }
};

export default authReducer;
