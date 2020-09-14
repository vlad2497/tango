import axios from "axios";
import { serverHost } from "../index";
import { ITicket } from "./../../interfaces/ITicket";

interface ITicketsListResponse {
  data: {
    data: ITicket[];
  };
}

export const getTicketsList = async () => {
  const response: ITicketsListResponse = await axios.get(
    `${serverHost}/api/student/protected/info`,
    {
      headers: { "Content-Type": "application/json" },
    }
  );

  return response.data.data;
};
