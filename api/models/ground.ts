import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ground {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  city: string;
}
