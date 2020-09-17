export enum ResponseType {
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
  WARNING = 'WARNING',
  INFO = 'INFO'
}
export class Response {
  status: ResponseType;
  msg: string;
  data: any;
  meta: any;
}
