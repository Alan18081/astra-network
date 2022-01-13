import {IsNumber, IsString, IsInstance} from 'class-validator';
import {User} from '../../users/user.entity';

export class AddCommentToNoteDto {
  @IsNumber() noteId: number;
  @IsString() text: string;
  @IsNumber() authorId: number;
}