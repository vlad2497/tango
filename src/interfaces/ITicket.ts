export interface ITicket {
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
