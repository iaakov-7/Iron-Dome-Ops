import express from "express";
import { operatorController } from "../controllers/operator_controller.js";
import { validCreateOperator } from "../middlewares/validation_middleware.js";

export const router = express.Router();

router.post("/", validCreateOperator, operatorController.createOperator);
