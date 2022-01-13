import {IsNumber, IsString, IsEmail, IsEmpty} from 'class-validator';

export class UpdateUserDto {
  @IsNumber() readonly id: number;
  @IsString() readonly firstName: string;
  @IsString() readonly lastName: string;
  @IsEmail() readonly email: string;
  @IsString() readonly birthday: string;
  @IsEmpty() readonly password: undefined;
}