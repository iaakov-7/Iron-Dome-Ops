import { logsRepo } from "../repositories/logs_repo.js";

export async function createLog(action, incidentId, operatorId, description) {
  const new_id = await logsRepo.create({
    action,
    incident_id: incidentId,
    operator_id: operatorId,
    description,
  });
  return new_id;
}
