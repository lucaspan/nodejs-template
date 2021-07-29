"use strict";

const response = (res, statusCode, message = null, data = null, debug = null) => {
  return res.status(statusCode).json({
    statusCode: statusCode,
    message: message,
    data: data,
    debug: process.env.NODE_ENV == "development" ? debug : false
  });
};

export default response;
