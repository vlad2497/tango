export const serverHost = "http://tangonoches.famedev.ru";

export interface IRequestError {
  data: {
    response: {
      data: {
        message: string;
      };
      status: number;
    };
  };
}
