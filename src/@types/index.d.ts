declare module AxiosType {
  interface ResponseType {
    status: number;
    code: number;
    message: string;
    data?: object | string;
  }
}
