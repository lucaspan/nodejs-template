"use strict";

import express from "express";
import cookieParser from "cookie-parser";
import logger from "./utility/logger";
import cors from "cors";
import helmet from "helmet";
import response from "./utility/response";
import router from "./router";
import { HTTP_STATUS_CODE } from "./model/common/httpStatusCode";
import { requestIdGenerator, requestIdLogger, requestLogger } from "./middleware/request";

const app = express();

app.use(requestIdGenerator);
app.use(requestIdLogger);

app.use(helmet());
app.use(
  cors({
    origin: process.env.CORS_WHITELIST.split(",")
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(requestLogger);

// Health status check
app.get("/health", async (req, res) => {
  return response(res, HTTP_STATUS_CODE.OK, "Healthy");
});
app.use("/api", router);

app.use((err, req, res, next) => {
  if (err) {
    // This is for pino logger to catch the original error
    res.err = err;
    const statusCode = err.statusCode || HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR;
    const message = err.message || "Internal Error";

    return response(res, statusCode, message, null, {
      error: {
        type: err.name,
        message: err.message,
        stack: err.stack
      }
    });
  }

  return next();
});

app.listen(process.env.PORT, (err) => {
  if (err) {
    logger.error({ err }, "Failed to start server");
  } else {
    logger.info(`${process.env.NODE_ENV} Started server on ${process.env.PORT}`);
  }
});

export default app;
