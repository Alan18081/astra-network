import {IsString, IsNumber, IsArray} from 'class-validator';

export class AddNoteDto {
  @IsString() title: string;
  @IsString() description: string;
  @IsNumber() userId: number;
  @IsString() createdAt: string;
}