import { ApolloServer, gql } from "apollo-server-express";
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageDisabled,
} from "apollo-server-core";
import express from "express";
import cookieParser from "cookie-parser";
import logger from "./helpers/Logger";
import { makeMiddlewareExpressCallback } from "./express-callback-adapter";

import resolvers from "./graphql/resolvers";
import makeSchema from "./graphql/schema";
import userSession from "./middlewares/userSession";
import gqlErrFormatter from "./gqlErrFormatter";

const startServer = async () => {
  const app = express();
  const typeDefs = makeSchema({ gql });
  app.use(cookieParser(<string>process.env.COOKIE_SECRET));
  app.use(makeMiddlewareExpressCallback(userSession));
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: (reqAndRes) => reqAndRes,
    csrfPrevention: true,
    formatError: gqlErrFormatter,
    plugins: [
      process.env.NODE_ENV === "production"
        ? ApolloServerPluginLandingPageDisabled()
        : ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
  });
  await server.start();
  server.applyMiddleware({ app , cors : {
    credentials: true,
    origin: true,
  } });
  const PORT = <string>process.env.PORT;
  app.listen(PORT, () => {
    logger.info(`🚀 Server Running On Port :${PORT}`);
  });
};

startServer();
