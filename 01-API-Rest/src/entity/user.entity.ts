import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  password: string;
}
