import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Comment} from '../comments/comment.entity';
import {User} from '../users/user.entity';
import {File} from '../files/file.entity';

@Entity()
export class Note {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  title: string;

  @Column({ length: 255, nullable: true })
  text: string;

  @ManyToOne(type => User)
  @JoinColumn({ name: 'authorId' })
  author: User;

  @Column()
  createdAt: string;

  @OneToMany(type => Comment, comment => comment.note)
  comments: Comment[];

  @OneToMany(type => File, file => file.note)
  files: File[];

}