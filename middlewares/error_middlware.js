export function errorHandler(err, req, res, next) {
  console.log(err.message);
  return res.status(err.statusCode || 500).json({
    success: false,
    message: err.statusCode ? err.message : "Server internal error",
  });
}
