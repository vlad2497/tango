import {
  SET_LESSON_ANNOUNCES_LIST,
  SET_LESSON_ANNOUNCES_LOADING,
  SET_LESSON_ANNOUNCES_ERROR,
} from "./selectors";
import { ILessonAnnounce } from "./../../../interfaces/ILessonAnnounce";

export interface IState {
  list: ILessonAnnounce[] | null;
  loading: boolean;
  error: string | null;
}

type ActionType =
  | {
      type: typeof SET_LESSON_ANNOUNCES_LIST;
      payload: IState["list"];
    }
  | {
      type: typeof SET_LESSON_ANNOUNCES_LOADING;
      payload: IState["loading"];
    }
  | {
      type: typeof SET_LESSON_ANNOUNCES_ERROR;
      payload: IState["error"];
    };

const initialState: IState = {
  list: null,
  error: null,
  loading: false,
};

const authReducer = (state = initialState, action: ActionType): IState => {
  switch (action.type) {
    case SET_LESSON_ANNOUNCES_LIST: {
      return { ...state, list: action.payload };
    }
    case SET_LESSON_ANNOUNCES_LOADING: {
      return { ...state, loading: action.payload };
    }
    case SET_LESSON_ANNOUNCES_ERROR: {
      return { ...state, error: action.payload };
    }
    default:
      return state;
  }
};

export default authReducer;
