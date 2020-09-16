export enum ResponseType {
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
  WARNING = 'WARNING',
  INFO = 'INFO'
}
export class Response {
  responseType: ResponseType;
  responseCode: number;
  msg: string;
  data: any;
  additionalData: any;
}
