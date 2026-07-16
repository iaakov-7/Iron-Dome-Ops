import { incidentServices } from "../services/incidents_service.js";

async function createIncident(req, res) {
  try {
    const { codeName, threatLevel, operatorId } = req.body;
    const new_id = await incidentServices.createIncident({
      code_name: codeName,
      threat_level: threatLevel.toUpperCase(),
      operator_id: operatorId,
    });
    res.status(201).json({
      success: true,
      message: `Created new incident with id ${new_id}`,
    });
  } catch (err) {
    if (err.code === "ER_NO_REFERENCED_ROW_2" || err.errno === 1452) {
      const error = new Error("There is no such operator ID.");
      error.statusCode = 400;
      throw error;
    }
    throw err;
  }
}

export const incidentController = { createIncident };
