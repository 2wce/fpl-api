import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { Club } from "./club";
import { Fixture } from "./fixture";
import { Stadium } from "./stadium";

export type MatchStatus = "won" | "drawn" | "unplayed" | "postponed";
@Entity()
export class Match {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @OneToOne(type => Stadium)
  @JoinColumn()
  stadium: Stadium;

  @Column()
  kickoff: string;

  @Column("datetime")
  matchDate: string;

  // 1st number is always the home team score
  @Column("simple-array")
  score: number[];

  // options: ["won", "drawn", "unplayed", "postponed"],
  @Column()
  status: string;

  @OneToOne(type => Club)
  @JoinColumn()
  homeTeam: Club;

  @OneToOne(type => Club)
  @JoinColumn()
  awayTeam: Club;

  @OneToOne(type => Club)
  @JoinColumn()
  winner: Club;

  @OneToOne(type => Club)
  @JoinColumn()
  loser: Club;

  @ManyToOne(
    type => Fixture,
    fixture => fixture.matchList
  )
  fixture: Fixture;
}
