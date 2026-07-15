import { incidentsRepo } from "../repositories/incidents_repo.js";

async function createIncident(incident) {
  const new_id = await incidentsRepo.create(incident);
  return new_id;
}

export const incidentServices = { createIncident };
