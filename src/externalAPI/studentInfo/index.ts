import axios from "axios";
import { serverHost } from "../index";
import { ITicket } from "./../../interfaces/ITicket";

interface IStudentInfoResponse {
  data: {
    tickets: ITicket[];
    points: number;
  };
}

export const getStudentInfo = async () => {
  const response: IStudentInfoResponse = await axios.get(
    `${serverHost}/api/student/protected/info`,
    {
      headers: { "Content-Type": "application/json" },
    }
  );

  return response.data;
};
