"use strict";

import { isProd } from "./env";

const response = (res, statusCode, message = null, data = null, debug = null) => {
  return res.status(statusCode).json({
    statusCode: statusCode,
    message: message,
    data: data,
    debug: isProd() ? false : debug
  });
};

export default response;
