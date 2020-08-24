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
  return [
    ...response.data.data,
    {
      id: 1,
      name: "Практика 22",
      start_date: "2020-05-27 19:00:00",
      end_date: "2020-05-27 22:00:00",
      address: "ул. Некрасова 17/1",
      extra_info: "150 р.",
      is_active: true,
      image: null,
      created_at: null,
      updated_at: "2020-04-22 14:34:11",
      deleted_at: null,
    },
    {
      id: 1,
      name: "Практика 333",
      start_date: "2020-05-27 19:00:00",
      end_date: "2020-05-27 22:00:00",
      address: "ул. Некрасова 17/1",
      extra_info: "150 р.",
      is_active: true,
      image: null,
      created_at: null,
      updated_at: "2020-04-22 14:34:11",
      deleted_at: null,
    },
    {
      id: 1,
      name: "Практика 44",
      start_date: "2020-05-27 19:00:00",
      end_date: "2020-05-27 22:00:00",
      address: "ул. Некрасова 17/1",
      extra_info: "150 р.",
      is_active: true,
      image: null,
      created_at: null,
      updated_at: "2020-04-22 14:34:11",
      deleted_at: null,
    },
    {
      id: 1,
      name: "Практика 55",
      start_date: "2020-05-27 19:00:00",
      end_date: "2020-05-27 22:00:00",
      address: "ул. Некрасова 17/1",
      extra_info: "150 р.",
      is_active: true,
      image: null,
      created_at: null,
      updated_at: "2020-04-22 14:34:11",
      deleted_at: null,
    },
  ];
};
