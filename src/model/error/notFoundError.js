import { HTTP_STATUS_CODE } from "../common/httpStatusCode";
import { BaseError } from "./baseError";

export class NotFoundError extends BaseError {
  constructor(message) {
    super("NotFoundError", HTTP_STATUS_CODE.NOT_FOUND, message);
  }
}
