import {IsString, IsNumber, IsInstance} from 'class-validator';
import {User} from '../../users/user.entity';

export class UpdateNoteDto {
  @IsNumber() id: number;
  @IsString() title: string;
  @IsString() description: string;
  @IsInstance(User) author: User;
  @IsString() createdAt: string;
}