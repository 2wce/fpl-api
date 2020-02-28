import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Club } from "./club";

@Entity()
export class Player {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  avatar: string;

  @Column()
  position: string;

  @Column()
  name: string;

  @Column()
  number: number;

  @ManyToOne(
    type => Club,
    club => club.squad
  )
  club: Club;
}
