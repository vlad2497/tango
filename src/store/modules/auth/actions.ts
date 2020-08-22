//Core
import { ThunkAction } from "redux-thunk";
import axios from "axios";
//Custom
import { login as _login } from "./../../../externalAPI/auth/login";
import { SET_AUTH_INFO, SET_AUTH_LOADING, SET_AUTH_ERROR } from "./selectors";
import { IState } from "./reducer";

//actions creators
export const setAuthInfo = (payload: IState["info"]) => ({
  type: SET_AUTH_INFO,
  payload,
});

export const setAuthLoading = (payload: IState["loading"]) => ({
  type: SET_AUTH_LOADING,
  payload,
});

export const setAuthError = (payload: IState["error"]) => ({
  type: SET_AUTH_ERROR,
  payload,
});

//thunk
export const login = (
  login: string,
  password: string
): ThunkAction<void, IState, unknown, any> => {
  return async (dispatch: any) => {
    try {
      dispatch(setAuthLoading(true));
      const token: string = await _login(login, password);
      localStorage.setItem("token", token);
      axios.defaults.headers.common["Authorization"] = token;
      dispatch(setAuthInfo({ token }));
      dispatch(setAuthLoading(false));
    } catch (error) {
      alert("Неверные логин или пароль !");
      dispatch(setAuthError(error.response.data.message));
      dispatch(setAuthLoading(false));
    }
  };
};
