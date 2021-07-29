"use strict";

import _ from "./utilities/env";
import express from "express";
import cookieParser from "cookie-parser";
import logger from "./utilities/logger";
import requestLogger from "./middlewares/requestLogger";
import cors from "cors";
import helmet from "helmet";
import response from "./utilities/response";
import routes from "./routes";

const app = express();
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

app.use("/api", routes);

app.use((err, req, res, next) => {
  if (err) {
    // This is for pino logger to catch the original error
    res.err = err;

    return response(res, 500, "Internal Error", null, {
      error: {
        type: err.name,
        message: err.message,
        stack: err.stack
      }
    });
  }

  next();
});

app.listen(process.env.PORT, (err) => {
  if (err) {
    logger.error({ err }, "Failed to start server");
  } else {
    logger.info(`Started server on ${process.env.PORT}`);
  }
});

export default app;
