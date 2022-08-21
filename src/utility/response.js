"use strict";

import { isProd } from "./env";

const response = (res, statusCode, message = null, data = null, debug = null) => {
  return res.status(statusCode).json({
    statusCode: statusCode,
    message: message,
    data: data,
    requestId: res.req.requestId,
    ...(!isProd() && { debug })
  });
};

export default response;
