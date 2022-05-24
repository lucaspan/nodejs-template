"use strict";

import path from "path";
import dotenv from "dotenv";

dotenv.config({
  path: path.join(__dirname, "../../config/.env")
});

export const isLocalDev = () => {
  return process.env.NODE_ENV.trim() === "local" || process.env.NODE_ENV.trim() === "development";
};

export const isUat = () => {
  return process.env.NODE_ENV.trim() === "uat";
};

export const isProd = () => {
  return process.env.NODE_ENV.trim() === "production";
};
