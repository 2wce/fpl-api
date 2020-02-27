import { ApolloServer } from "apollo-server-express";
import express from "express";
import * as schema from "./schema";

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

export default app;
