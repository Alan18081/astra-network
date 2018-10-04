import {IsNumber, IsOptional, IsPositive} from 'class-validator';
import {GetParamsDto} from './get-params.dto';

export class GetNotesWithPaginationDto extends GetParamsDto {
  @IsNumber() @IsOptional() authorId?: number;
  @IsNumber() @IsPositive() page: number;
  @IsNumber() @IsPositive() limit: number;
}