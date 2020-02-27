import { gql } from "apollo-server-express";

const standingTypeDefs = gql`
  type Standing {
    id: ID
    club: Club
    position: Position
    played: Int
    won: Int
    drawn: Int
    lost: Int
    goals: Goal
    points: Int
    form: [Fixture]
    nextMatch: Fixture
  }

  extend type Query {
    standings: [Standing]
    standing(abbr: String!): Standing
  }
`;

export default standingTypeDefs;
