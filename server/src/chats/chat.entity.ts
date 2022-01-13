import {Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Message} from '../messages/message.entity';
import {User} from '../users/user.entity';

@Entity()
export class Chat {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  title: string;

  @OneToMany(type => Message, message => message.chat)
  messages: Message[];

  @ManyToMany(type => User, user => user.chats)
  users: User[];

  @Column({
    type: Boolean,
    default: false
  })
  group: boolean;
}