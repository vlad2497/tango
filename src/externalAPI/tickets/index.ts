import axios from "axios";
import { serverHost } from "../index";

export interface ITicketItem {
  lessons_left: number;
  type: {
    name: string;
  };
  ticket: {
    ticket_end_date: string;
    ticketCount: {
      lessons_count: number;
    };
  };
}

interface ITicketsListResponse {
  data: {
    tickets: ITicketItem[];
  };
}

export const getTicketsList = async (bar_code: string) => {
  const response: ITicketsListResponse = await axios.get(
    `${serverHost}/api/student/protected/info?barcode_id=${bar_code}`,
    {
      headers: { "Content-Type": "application/json" },
    }
  );

  return [
    ...response.data.tickets,
    {
      id: 57,
      lessons_left: 3,
      type: { id: 1, name: "Танго 2" },
      ticket: {
        ticket_start_date: "2020-07-01T21:00:00.000000Z",
        ticket_end_date: "2020-08-01T21:00:00.000000Z",
        ticketCount: {
          id: 2,
          name: "8 уроков",
          price: 2000,
          lessons_count: 8,
        },
        ticketType: { id: 1, name: "Танго 2" },
      },
    },
    {
      id: 57,
      lessons_left: 1,
      type: { id: 1, name: "Танго 4" },
      ticket: {
        ticket_start_date: "2020-07-01T21:00:00.000000Z",
        ticket_end_date: "2020-08-01T21:00:00.000000Z",
        ticketCount: {
          id: 2,
          name: "8 уроков",
          price: 2000,
          lessons_count: 8,
        },
        ticketType: { id: 1, name: "Танго 4" },
      },
    },
  ];
};
