import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {User} from '../users/user.entity';
import {Note} from '../notes/note.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column({ length: 255 })
  createdAt: string;

  @ManyToOne(type => User, user => user.comments)
  author: User;

  @ManyToOne(type => Note, note => note.comments)
  note: Note
}