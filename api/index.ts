// @ts-ignore
import { ApolloServer } from "apollo-server-express";
import express from "express";
import "reflect-metadata";
import { createConnection } from "typeorm";
import * as schema from "./schema";

export default createConnection()
  .then(async connection => {
    const server = new ApolloServer({
      ...schema,
      introspection: true,
      playground: { endpoint: "/api" }
    });

    const app = express();

    server.applyMiddleware({ app, path: "/api" });

    const port = process.env.PORT || 4000;

    app.listen({ port }, () =>
      console.log(`🚀 Server ready at ${server.graphqlPath}`)
    );
  })
  .catch(error => console.log("TypeORM connection error: ", error));

// export default app;
