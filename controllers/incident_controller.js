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

async function updateStatus(req, res) {
  const status = req.body.status;
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    const error = new Error("Id must be a number");
    error.statusCode = 400;
    throw error;
  }
  const success = await incidentServices.updateStatus(status, id);
  if (success) {
    res.json({ success: true, message: `Incident ${id} updated successfully` });
  } else throw error;
}

async function getOpenIncident(req, res) {
  const incidents = await incidentServices.getIncidentsByStatus("OPEN");
  res.json({ success: true, incidents });
}
export const incidentController = {
  createIncident,
  updateStatus,
  getOpenIncident,
};
