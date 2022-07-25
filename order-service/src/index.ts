import express, { Application } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import logger from "./helpers/Logger";
import { connectDB } from "./data-access";
import expressCallback from "./express-callback-adapter";

import {
  postCreateOrder,
  getShowOrders,
  getShowOrder,
  getShowUserOrders,
} from "./controller";

//Deps
const app: Application = express();
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());

//Routes
app.post("/api/v1/order/create", expressCallback(postCreateOrder));
app.get("/api/v1/order/showAll", expressCallback(getShowOrders));
app.get("/api/v1/order/show/:orderId", expressCallback(getShowOrder));
app.get("/api/v1/order/showByUser", expressCallback(getShowUserOrders));

//Listen
const PORT = <string>process.env.PORT;
app.listen(PORT, async () => {
  try {
    await connectDB();
    logger.info(`🚀 Db Connected & Server Running On Port :${PORT}`);
  } catch (err) {
    logger.error(err);
    process.exit(1);
  }
});

//User id ke az access token migirim ro be onvane header to api gateway midim to request. faghat api gateway bayad betoone ba api ha dastresi dashte bashe va api ha private bashan
