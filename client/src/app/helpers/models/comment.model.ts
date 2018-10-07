import {User} from './user.model';
import {Note} from './note.model';

export interface Comment {
  id: number;
  text: string;
  createdAt: string;
  author?: User;
  note?: Note;
}
