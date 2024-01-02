import { Entity, Column, PrimaryGeneratedColumn, Entity } from "typeorm"

@Entity()
export class Bookmark {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  description: string
}

