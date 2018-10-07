import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {Note} from '../notes/note.entity';

@Entity()
export class File {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @ManyToOne(type => Note, note => note.files)
  @JoinColumn('noteId')
  note: Note
}