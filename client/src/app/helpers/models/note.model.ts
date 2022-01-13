import {User} from './user.model';
import {Comment} from './comment.model';

export interface Note {
  id: number;
  title: string;
  text: string;
  author: User,
  createdAt: string;
  comments?: Comment[];
}
