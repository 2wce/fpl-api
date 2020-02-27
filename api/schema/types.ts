import { gql } from "apollo-server-express";

const types = gql`
  type Club {
    id: ID!
    badge: String
    key: String
    name: String
    abbr: String
    shortName: String
    website: String
    squad: [Player]
    stadium: Ground
    standing: Standing
  }

  type Fixture {
    id: ID!
    matchDate: String
    matchList: [Match]
  }

  type Goal {
    for: Int
    against: Int
    difference: String
  }

  type Position {
    id: ID
    previous: Int
    current: Int
  }

  type Match {
    id: ID
    ground: Ground
    kickoff: String
    matchDate: String
    homeTeam: Club
    awayTeam: Club
    score: Score
  }

  type Ground {
    id: ID!
    name: String
    city: String
    club: Club
  }

  type Score {
    id: ID
    homeTeam: Int
    awayTeam: Int
  }

  type Player {
    avatar: String
    name: String
    number: Int
    position: String
  }
`;

export default types;
