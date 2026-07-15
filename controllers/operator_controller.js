import { operatorServices } from "../services/operatoes_service.js";

async function createOperator(req, res) {
  const { name, rank } = req.body;
  const operator = { name, operator_rank: rank };
  const new_id = await operatorServices.createOperator(operator);
  res
    .status(201)
    .json({ success: true, message: `Created new operator with id ${new_id}` });
}

export const operatorController = { createOperator };
