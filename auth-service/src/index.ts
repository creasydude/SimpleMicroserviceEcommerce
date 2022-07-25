import express, { Application } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import logger from "./helpers/Logger";
import { connectDb } from "./data-access";
import makeExpressCallback from "./express-callback-adapter";
import { postRegister, postLogin, postResendOtp , getRefreshToken , getValidateToken , deleteLogout } from "./controller";

//Deps
const app: Application = express();
app.use(cors({ credentials: true, origin: true }))
app.use(bodyParser.json());
app.use(cookieParser(<string>process.env.COOKIE_PARSER_SECRET));

//Routes
app.post("/api/v1/auth/register", makeExpressCallback(postRegister));
app.post("/api/v1/auth/login", makeExpressCallback(postLogin));
app.post("/api/v1/auth/resendOtp", makeExpressCallback(postResendOtp));
app.get("/api/v1/auth/refreshToken", makeExpressCallback(getRefreshToken));
app.get("/api/v1/auth/validateToken/:tokenToVerify", makeExpressCallback(getValidateToken));
app.delete("/api/v1/auth/logout", makeExpressCallback(deleteLogout));

//Listen
const PORT = <string>process.env.PORT ;
app.listen(PORT, async () => {
  try {
    await connectDb();
    logger.info(`🚀 Db Connected & Server Running On Port :${PORT}`);
  } catch (err) {
    logger.error(err);
    process.exit(1);
  }
});
