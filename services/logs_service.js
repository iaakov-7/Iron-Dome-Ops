import { logsRepo } from "../repositories/logs_repo";

export async function createLog(action, incidentId, operatorId, description) {
  const new_id = await logsRepo.create({
    action,
    incident_id: incidentId,
    operator_id: operatorId,
    description,
    created_at: new Date(),
  });
  return new_id;
}
