//Note : I know it doesnt have auth and its unsafe but its for practice purpose
import express, { Application } from "express";
import cors from "cors";
import bodyParser from "body-parser";

import logger from "./helpers/Logger";
import { connectDB } from "./data-access";
import makeExpressCallback from "./express-callback-adapter";
import { postCreateProduct , postUpdateProduct, deleteDeleteProduct , getShowProduct , getShowProducts , getSearchProduct} from "./controller";

//Deps
const app: Application = express();
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());

//Routes
app.post("/api/v1/product/create", makeExpressCallback(postCreateProduct));
app.post("/api/v1/product/update", makeExpressCallback(postUpdateProduct));
app.delete("/api/v1/product/delete/:pId", makeExpressCallback(deleteDeleteProduct));
app.get("/api/v1/product/showAll", makeExpressCallback(getShowProducts));
app.get("/api/v1/product/show/:productId", makeExpressCallback(getShowProduct));
app.get("/api/v1/product/search", makeExpressCallback(getSearchProduct));

//Listen
const PORT = <string>process.env.PORT
app.listen(PORT,async () => {
    try {
        await connectDB()
        logger.info(`🚀 Db Connected & Server Running On Port :${PORT}`)
    } catch (error) {
        logger.error(error);
        process.exit(1)
    }
})