import express from "express";
import "dotenv/config";
import { router as operatorRouter } from "./routes/operators_routes.js";

const app = express();

app.use(express.json());

app.use("/operators", operatorRouter);

app.listen(process.env.PORT, () =>
  console.log(`Server is listening in port ${process.env.PORT}`),
);
