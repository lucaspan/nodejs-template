import { HTTP_STATUS_CODE } from "../common/httpStatusCode";
import { BaseError } from "./baseError";

export class InternalServerError extends BaseError {
  constructor(message) {
    super("InternalServerError", HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR, message);
  }
}
