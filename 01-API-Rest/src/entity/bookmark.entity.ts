import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

import { User } from './user.entity'

@Entity()
export class Bookmark {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  url: string;

  @ManyToOne(() => User, user => user.bookmarks)
  user: User
}
