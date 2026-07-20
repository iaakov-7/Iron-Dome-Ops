import express from "express";
import "dotenv/config";
import { router as operatorRouter } from "./routes/operators_routes.js";
import { router as incidentRouter } from "./routes/incidents_routes.js";
import { errorHandler } from "./middlewares/error_middlware.js";
import { pool } from "./db/database.js";

const app = express();

app.use(express.json());

app.use("/operators", operatorRouter);
app.use("/incidents", incidentRouter);
app.use((req, res) =>
  res.status(404).json({
    success: false,
    message: `Route ${req.url} not exists for method ${req.method}`,
  }),
);
app.use(errorHandler);
const server = app.listen(process.env.PORT, () =>
  console.log(`Server is listening in port ${process.env.PORT}`),
);

async function shutdown() {
  try {
    await pool.end();
    console.log("Mysql connection pool closed");
    server.close(() => {
      console.log("Express server closed");
      process.exit(0);
    });
  } catch (err) {
    console.log("Error during shutdown");
    process.exit(1);
  }
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
