export const serverHost = "http://tangonoches.famedev-stage.online";

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
