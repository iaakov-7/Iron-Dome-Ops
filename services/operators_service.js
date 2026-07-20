import { operatorsRepo } from "../repositories/operators_repo.js";

async function createOperator(operator) {
  const new_id = await operatorsRepo.create(operator);
  return new_id;
}

export const operatorServices = { createOperator };
