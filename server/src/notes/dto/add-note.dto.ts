import {IsString, IsInstance, IsNumber} from 'class-validator';
import {User} from '../../users/user.entity';

export class AddNoteDto {
  @IsString() title: string;
  @IsString() text: string;
  @IsNumber() authorId: number;
}