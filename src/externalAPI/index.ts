export const serverHost = "http://192.168.56.1";

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
