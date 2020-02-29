import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { Club } from "./club";

@Entity()
export class Stadium {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  city: string;

  @OneToOne(type => Club)
  @JoinColumn()
  club: Club;
}
