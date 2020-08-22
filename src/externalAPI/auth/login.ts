import axios from "axios";
import { serverHost } from "../index";

export interface ILoginResponse {
  data: {
    api_token: string;
  };
}

export const login = async (bar_code: string, password: string) => {
  const response: ILoginResponse = await axios.post(
    `${serverHost}/api/student/login`,
    { bar_code, password },
    { headers: { "Content-Type": "application/json" } }
  );
  return response.data.api_token;
};
