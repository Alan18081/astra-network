import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Comment} from '../comments/comment.entity';
import {User} from '../users/user.entity';

@Entity()
export class Note {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  title: string;

  @Column({ length: 255, nullable: true })
  text: string;

  @Column()
  authorId: number;

  @ManyToOne(type => User)
  author: User;

  @Column()
  createdAt: string;

  @OneToMany(type => Comment, comment => comment.note)
  comments: Comment[];

}