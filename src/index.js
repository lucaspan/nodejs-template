"use strict";

import _ from "./utilities/env";
import express from "express";
import cookieParser from "cookie-parser";
import logger from "./utilities/logger";
import cors from "cors";
import helmet from "helmet";
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

app.use("/api", routes);

app.listen(process.env.PORT, (error) => {
  if (error) {
    logger.error({ err }, "Failed to start server");
  } else {
    logger.info(`Started server on ${process.env.PORT}`);
  }
});

export default app;
