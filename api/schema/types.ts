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

  type Standing {
    id: ID
    club: Club
    position: Position
    played: Int
    won: Int
    drawn: Int
    lost: Int
    points: Int
    goals: Goal
    form: [Match]
    nextMatch: Match
  }

  type Fixture {
    id: ID!
    matchDate: String
    matchList: [Match]
  }

  type Goal {
    for: Int
    against: Int
    difference: Int
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
    status: Status
    homeTeam: Club
    awayTeam: Club
    winner: Club
    loser: Club
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

  enum Status {
    won
    drawn
    unplayed
    postponed
  }
`;

export default types;
