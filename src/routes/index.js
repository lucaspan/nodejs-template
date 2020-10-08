"use strict";

import express from "express";
import makeResponse from "../utilities/response";

const router = express.Router();

// Health status check
router.get("/health", (req, res) => {
  return makeResponse(res, 200, "Healthy!");
});

export default router;
