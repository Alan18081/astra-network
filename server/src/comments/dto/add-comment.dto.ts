import {IsNumber, IsString} from 'class-validator';

export class AddCommentDto {
  @IsString() text: string;
  @IsNumber() authorId: number;
  @IsNumber() noteId: number;
}