export interface User {
  id: string;
  name: string;
  username: string;
  token: number;
  team: Team;
}

export interface Standing {
  id: string;
  club: Club;
  position: Position;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goals: Goal;
  points: number;
  form: [Fixture];
  nextMatch: Fixture;
}

export interface Goal {
  id: string;
  club: Club;
  for: number;
  against: number;
  difference: number;
}

export interface Team {
  id: string;
  userId: string;
}

export interface Club {
  id: string;
  abbr: string;
  name: string;
  badge: string;
  website: string;
}

export interface Player {
  id: string;
  userId: string;
  avatar: string;
  name: string;
  number: number;
  position: string;
}

export interface Fixture {
  id: string;
  ground: Ground;
  kickoff: String;
  matchDate: String;
  teams: [Club];
  score: [Score];
  result: String;
}

export interface Ground {
  name: string;
}

export interface Score {
  id: string;
}

export interface Match {
  id: string;
  ground: Ground;
  kickoff: string;
  matchDate: string;
  teams: [Club];
  score: [Score];
  result: string;
}

export interface AssistStat {
  id: string;
  rank: number;
  player: Player;
  club: Club;
  stat: number;
}

export interface GoalStat {
  id: string;
  rank: number;
  player: Player;
  club: Club;
  stat: number;
}
