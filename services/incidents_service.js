import { incidentsRepo } from "../repositories/incidents_repo.js";

async function createIncident(incident) {
  const new_id = await incidentsRepo.create(incident);
  return new_id;
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

export const incidentServices = { createIncident, updateStatus };
