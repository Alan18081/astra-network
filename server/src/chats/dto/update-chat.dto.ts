import {IsString, IsArray, IsNumber} from 'class-validator';

export class UpdateChatDto {
  @IsNumber() id: number;
  @IsString() title: string;
  @IsArray({
    each: true
  })
  users: number[];
}