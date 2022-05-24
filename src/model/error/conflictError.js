import { HTTP_STATUS_CODE } from "../common/httpStatusCode";
import { BaseError } from "./baseError";

export class ConflictError extends BaseError {
  constructor(message) {
    super("ConflictError", HTTP_STATUS_CODE.CONFLICT, message);
  }
}
