import { gql } from "apollo-server-express";

const standingTypeDefs = gql`
  extend type Query {
    standings: [Standing]
    standing(abbr: String!): Standing
  }
`;

export default standingTypeDefs;
