import {IsString, IsArray} from 'class-validator';
export class AddChatDto {
  @IsString() title: string;
  @IsArray({
    each: true
  })
  users: number[];
}