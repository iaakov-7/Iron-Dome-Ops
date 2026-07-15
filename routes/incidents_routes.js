import express from "express";
import { validCreateIncident } from "../middlewares/validation_middleware.js";
import { incidentController } from "../controllers/incident_controller.js";

export const router = express.Router();

router.post("/", validCreateIncident, incidentController.createIncident);
