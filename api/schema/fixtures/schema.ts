import { gql } from "apollo-server-express";

const fixtureTypeDefs = gql`
  extend type Query {
    fixtures(abbr: String): [Fixture]
    fixture(matchDate: String!): Fixture
    # @TODO: to be updated to use abbr in the Mutation milestone
    results(shortName: String): [Fixture]
  }
`;

export default fixtureTypeDefs;
