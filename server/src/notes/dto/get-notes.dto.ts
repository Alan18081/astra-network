import {IsNumber, IsOptional} from 'class-validator';
import {GetParamsDto} from './get-params.dto';

export class GetNotesDto extends GetParamsDto {
  @IsNumber() @IsOptional() authorId: number;
}