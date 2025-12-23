export interface IHttpResponse<T> {
  error: boolean;
  message: string;
  body: T;
}

export class HttpResponse {
  public ok<T>(data: T, message = "Success"): IHttpResponse<T> {
    return {
      error: false,
      message: message,
      body: data,
    };
  }
  public badRequest(message: string): IHttpResponse<null> {
    return {
      error: true,
      message: message,
      body: null,
    };
  }
}