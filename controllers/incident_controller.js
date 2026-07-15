import { incidentServices } from "../services/incidents_service.js";

async function createIncident(req, res) {
  const { codeName, threatLevel, operatorId } = req.body;
  const new_id = await incidentServices.createIncident({
    code_name: codeName,
    threat_level: threatLevel.toUpperCase(),
    operator_id: operatorId,
  });
  res
    .status(201)
    .json({ success: true, message: `Created new incident with id ${new_id}` });
}

export const incidentController = { createIncident };
