import { gql } from "apollo-server-express";

const fixtureTypeDefs = gql`
  extend type Query {
    fixtures(abbr: String): [Fixture]
    fixture(matchDate: String!): Fixture
  }
`;

export default fixtureTypeDefs;
