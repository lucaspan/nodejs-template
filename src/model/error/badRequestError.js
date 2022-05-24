import { HTTP_STATUS_CODE } from "../common/httpStatusCode";
import { BaseError } from "./baseError";

export class BadRequestError extends BaseError {
  constructor(message) {
    super("BadRequestError", HTTP_STATUS_CODE.BAD_REQUEST, message);
  }
}
