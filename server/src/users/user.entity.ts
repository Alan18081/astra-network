import {Entity, Column, PrimaryGeneratedColumn, Index, OneToMany, ManyToMany} from 'typeorm';
import {Comment} from '../comments/comment.entity';
import {Note} from '../notes/note.entity';
import {Message} from '../messages/message.entity';
import {Chat} from '../chats/chat.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  firstName: string;

  @Column({ length: 255 })
  lastName: string;

  @Index({ unique: true })
  @Column({ unique: true, length: 255 })
  email: string;

  @Column({
    default: 'https://www.latimes.com/resizer/jd1uaiDEEYcUqSA6599FfHe-e8A=/1400x0/www.trbimg.com/img-5b76bdd1/turbine/la-1534508493-0ehdvdjrm3-snap-image'
  })
  avatar: string;

  @Column({
    default: 'https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/files/2018/05/star_black_hole.jpg?itok=gXoumeFr&fc=50,50'
  })
  background: string;

  @Column({ nullable: true })
  phone?: string;

  @Column({ nullable: true, length: 255 })
  status?: string;

  @Column({ nullable: true })
  info?: string;

  @Column({ length: 255, select: false })
  password: string;

  @Column({ length: 255 })
  birthday: string;

  @OneToMany(type => Comment, comment => comment.author)
  comments: Comment[];

  @OneToMany(type => Note, note => note.author)
  notes: Note[];

  @OneToMany(type => Message, message => message.author)
  messages: Message[];

  @ManyToMany(type => Chat, chat => chat.users)
  chats: Chat[];
}