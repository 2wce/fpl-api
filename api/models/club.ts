import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { Ground } from "./ground";
import { Player } from "./player";

@Entity()
export class Club {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  badge: string;

  @Column()
  key: string;

  @Column()
  name: string;

  @Column()
  abbr: string;

  @Column()
  shortName: string;

  @Column()
  website: string;

  @OneToOne(type => Ground)
  @JoinColumn()
  stadium: Ground;

  @OneToMany(
    type => Player,
    squad => squad.club
  ) // note: we will create author property in the Photo class below
  squad: Player[];
}
