import { Column, PrimaryGeneratedColumn, Entity, OneToMany } from "typeorm";

import { Bookmark } from "./bookmark.entity"

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  password: string;

  @OneToMany(() => Bookmark, bookmark => bookmark.user)
  bookmarks: Bookmark[]
}
