import {IsString, IsInstance, IsNumber, IsNumberString} from 'class-validator';
import {User} from '../../users/user.entity';

export class AddNoteDto {
  @IsString() title: string;
  @IsString() text: string;
  @IsNumberString() authorId: number;
}