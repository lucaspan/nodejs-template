import { HTTP_STATUS_CODE } from "../common/httpStatusCode";
import { BaseError } from "./baseError";

export class TooManyRequestsError extends BaseError {
  constructor(message) {
    super("TooManyRequestsError", HTTP_STATUS_CODE.TOO_MANY_REQUESTS, message);
  }
}
