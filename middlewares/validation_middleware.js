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
