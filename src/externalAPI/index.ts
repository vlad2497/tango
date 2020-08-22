export const serverHost = "http://tango";

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
