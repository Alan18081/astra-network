import {IsNumber} from 'class-validator';
import {GetParamsDto} from './get-params.dto';

export class GetNoteByIdDto extends GetParamsDto {
  @IsNumber() id: number;
}