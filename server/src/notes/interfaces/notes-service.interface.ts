import {Note} from '../note.entity';
import {AddNoteDto} from '../dto/add-note.dto';
import {UpdateNoteDto} from '../dto/update-note.dto';
import {AddCommentToNoteDto} from '../dto/add-comment-to-note.dto';

export interface INotesService {
  findAll(): Promise<Note[]>;
  findNoteById(id: number): Promise<Note>;
  addNote(payload: AddNoteDto): Promise<Note>;
  updateNote(payload: UpdateNoteDto): Promise<Note>;
  removeNote(id: number): Promise<any>;
  addCommentToNote(payload: AddCommentToNoteDto): Promise<Note>;
}