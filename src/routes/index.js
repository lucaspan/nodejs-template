"use strict";

import express from "express";
import response from "../utilities/response";

const router = express.Router();

// Health status check
router.get("/health", async (req, res) => {
  return response(res, 200, "Healthy!");
});

export default router;
