//Core
import { ThunkAction } from "redux-thunk";
//Custom
import {
  SET_LESSON_ANNOUNCES_LIST,
  SET_LESSON_ANNOUNCES_LOADING,
  SET_LESSON_ANNOUNCES_ERROR,
} from "./selectors";
import { IState } from "./reducer";
import { getLessons } from "./../../../externalAPI/announces/lessons";
import { ILessonAnnounce } from "./../../../interfaces/ILessonAnnounce";

//actions creators
export const setLessonAnnouncesList = (payload: IState["list"]) => ({
  type: SET_LESSON_ANNOUNCES_LIST,
  payload,
});

export const setLessonAnnouncesLoading = (payload: IState["loading"]) => ({
  type: SET_LESSON_ANNOUNCES_LOADING,
  payload,
});

export const setLessonAnnouncesError = (payload: IState["error"]) => ({
  type: SET_LESSON_ANNOUNCES_ERROR,
  payload,
});

//thunk
export const getLessonAnnounces = (): ThunkAction<
  void,
  IState,
  unknown,
  any
> => {
  return async (dispatch: any) => {
    try {
      dispatch(setLessonAnnouncesLoading(true));
      const lessons: ILessonAnnounce[] = await getLessons();
      dispatch(setLessonAnnouncesList(lessons));
      dispatch(setLessonAnnouncesLoading(false));
    } catch (error) {
      alert(error.response.data.message);
      dispatch(setLessonAnnouncesError(error.response.data.message));
      dispatch(setLessonAnnouncesLoading(false));
    }
  };
};
