"use strict";

import _ from "./utilities/env";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import logger from "./utilities/logger";
import cors from "cors";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api", routes);

app.listen(process.env.PORT, (error, server) => {
  if (error) {
    logger.error({ err }, "Failed to start server");
  } else {
    logger.info(`Started server on ${process.env.PORT}`);
  }
});

export default app;
