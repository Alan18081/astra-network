import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {User} from '../users/user.entity';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  text: string;

  @Column()
  createdAt: string;

  @ManyToOne(type => User, user => user.messages)
  @JoinColumn('authorId')
  author: User;
}