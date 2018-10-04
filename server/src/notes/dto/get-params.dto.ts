import {IsBoolean, IsOptional} from 'class-validator';

export class GetParamsDto {
  @IsBoolean() @IsOptional() includeComments?: boolean;
}