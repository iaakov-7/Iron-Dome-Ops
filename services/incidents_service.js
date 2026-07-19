import { incidentsRepo } from "../repositories/incidents_repo.js";
import { createLog } from "./logs_service.js";

async function createIncident(incident) {
  try {
    const new_id = await incidentsRepo.create(incident);
    createLog(
      "Insert incident",
      new_id,
      incident.operatorId,
      `Create a new incident`,
    );
    return new_id;
  } catch (err) {
    if (err.code === "ER_NO_REFERENCED_ROW_2" || err.errno === 1452) {
      const error = new Error("There is no such operator ID.");
      error.statusCode = 400;
      throw error;
    }
    throw err;
  }
}

async function updateStatus(status, id) {
  if (
    !["OPEN", "TRACKING", "INTRERCEPTED", "CLOSED"].includes(
      status.toUpperCase(),
    )
  ) {
    const error = new Error(
      `status must be one of these => "OPEN", "TRACKING", "INTERCEPTED", "CLOSED"`,
    );
    error.statusCode = 400;
    throw error;
  }
  const existsIncident = await incidentsRepo.findById(id);
  if (existsIncident) {
    const success = await incidentsRepo.update(
      { status: status.toUpperCase() },
      id,
    );
    return success;
  } else {
    const error = new Error(`Incident ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
}

async function getIncidentsByStatus(status) {
  const incidents = await incidentsRepo.find({ status: status });
  return incidents;
}
export const incidentServices = {
  createIncident,
  updateStatus,
  getIncidentsByStatus,
};
