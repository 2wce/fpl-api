import { gql } from "apollo-server-express";
import { merge } from "lodash";
import { fixtureResolvers, fixtureTypeDefs } from "./fixtures";
import { standingResolvers, standingTypeDefs } from "./standings";
import types from "./types";

const init = gql`
  type Query {
    _empty: String
  }
  type Mutation {
    _empty(nothing: String): String
  }
  type Response {
    success: Boolean
    error: Error
  }
  type Error {
    status: String
    message: String
  }
`;

const typeDefs = [init, fixtureTypeDefs, standingTypeDefs, types];

const resolvers = merge({}, fixtureResolvers, standingResolvers);

export { typeDefs, resolvers };
