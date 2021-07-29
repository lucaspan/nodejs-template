"use strict";

import logger from "../utilities/logger";
import ExpressPinoLogger from "express-pino-logger";

const requestLogger = ExpressPinoLogger({
  logger: logger,

  serializers: {
    req: (req) => ({
      method: req.method,
      url: req.url
    }),
    res: (res) => ({
      statusCode: res.statusCode
    })
  }
});

export default requestLogger;
