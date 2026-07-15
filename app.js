import express from "express";
import "dotenv/config";
import { router as operatorRouter } from "./routes/operators_routes.js";
import { router as incidentRouter } from "./routes/incidents_routes.js";
import { errorHandler } from "./middlewares/error_middlware.js";

const app = express();

app.use(express.json());

app.use("/operators", operatorRouter);
app.use("/incidents", incidentRouter);
app.use(errorHandler);
app.listen(process.env.PORT, () =>
  console.log(`Server is listening in port ${process.env.PORT}`),
);
