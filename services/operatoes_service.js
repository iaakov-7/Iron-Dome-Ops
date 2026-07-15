import { operators_repo } from "../repositories/operators_repo.js";

async function createOperator(operator) {
  const new_id = await operators_repo.create(operator);
  return new_id;
}

export const operatorServices = { createOperator };
