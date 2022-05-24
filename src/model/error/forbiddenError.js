import { HTTP_STATUS_CODE } from "../common/httpStatusCode";
import { BaseError } from "./baseError";

export class ForbiddenError extends BaseError {
  constructor(message) {
    super("ForbiddenError", HTTP_STATUS_CODE.FORBIDDEN, message);
  }
}
