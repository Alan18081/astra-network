import {IsString} from 'class-validator';

export class AddFileDto {
  @IsString() noteId: number;
}