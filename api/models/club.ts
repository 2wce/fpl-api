import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { Player } from "./player";
import { Stadium } from "./stadium";

@Entity()
export class Club {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  badge: string;

  @Column()
  name: string;

  @Column()
  abbr: string;

  @Column()
  shortName: string;

  @Column()
  website: string;

  @OneToOne(type => Stadium)
  @JoinColumn()
  stadium: Stadium;

  @OneToMany(
    type => Player,
    squad => squad.club
  ) // note: we will create author property in the Photo class below
  squad: Player[];
}
