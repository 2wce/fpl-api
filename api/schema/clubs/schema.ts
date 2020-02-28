import { gql } from "apollo-server-express";

const clubTypeDefs = gql`
  extend type Query {
    club(abbr: String): Club
    clubs: [Club]
  }
`;

export default clubTypeDefs;
