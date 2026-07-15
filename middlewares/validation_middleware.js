export function validCreateOperator(req, res, next) {
  const errors = [];
  if (!req.body.name || typeof req.body.name !== "string") {
    errors.push("Field name is required and must be type of string");
  }
  if (!req.body.rank || typeof req.body.rank !== "string") {
    errors.push("Field rank is required and must be type of string");
  }
  if (errors.length > 0) {
    const error = new Error(errors);
    error.statusCode = 400;
    throw error;
  }
  next();
}

export function validCreateIncident(req, res, next) {
  const errors = [];
  if (!req.body.codeName || typeof req.body.codeName !== "string") {
    errors.push("Field name is required and must be type of string");
  }
  if (
    !req.body.threatLevel ||
    typeof req.body.threatLevel !== "string" ||
    !["LOW", "HIGH", "MEDIUM", "CRITICAL"].includes(
      req.body.threatLevel.toUpperCase(),
    )
  ) {
    errors.push(
      "Field threatLevel is required and must be one of these Level [LOW, HIGH, MEDIUM, CRITICAL]",
    );
  }
  if (!req.body.operatorId || typeof req.body.operatorId !== "number") {
    errors.push("Field operatorId is required and must be type of number");
  }
  if (errors.length > 0) {
    const error = new Error(errors);
    error.statusCode = 400;
    throw error;
  }
  next();
}
