import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Bookmark {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  description: string
}

