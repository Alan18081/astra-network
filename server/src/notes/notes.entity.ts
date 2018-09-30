import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Note {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  title: string;

  @Column({ length: 255, nullable: true })
  text: string;

  @ManyToOne(type => Note)
  userId: number;

  @Column()
  createdAt: string;
}