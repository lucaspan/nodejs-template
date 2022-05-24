"use strict";

import pino from "pino";
import { clsProxify } from 'cls-proxify'

export const loggerPino = pino({
  prettyPrint: {
    colorize: false,
    translateTime: "SYS:yyyy-mm-dd HH:MM:ss Z"
  }
});

const logger = clsProxify(loggerPino);

export default logger;
