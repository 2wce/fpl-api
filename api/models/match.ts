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
import { Ground } from "./ground";

@Entity()
export class Match {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @OneToOne(type => Ground)
  @JoinColumn()
  ground: Ground;

  @Column()
  kickoff: string;

  @Column()
  matchDate: string;

  @OneToOne(type => Club)
  @JoinColumn()
  homeTeam: Club;

  @OneToOne(type => Club)
  @JoinColumn()
  awayTeam: Club;

  @ManyToOne(
    type => Fixture,
    fixture => fixture.matchList
  )
  fixture: Fixture;
}
