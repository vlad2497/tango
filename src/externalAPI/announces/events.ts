//Core
import axios from "axios";
//Custom
import { serverHost } from "../index";
import { IEventAnnounce } from "./../../interfaces/IEventAnnounce";

interface IEventAnnounceResponse {
  data: {
    data: IEventAnnounce[];
  };
}

export const getEvents = async () => {
  const response: IEventAnnounceResponse = await axios.get(
    `${serverHost}/api/student/eventAnnounces`,
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  return response.data.data;
};
