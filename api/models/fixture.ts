import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Match } from "./match";

@Entity()
export class Fixture {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  matchDate: string;

  @OneToMany(
    type => Match,
    match => match.fixture
  ) // note: we will create author property in the Photo class below
  matchList: Match[];
}
