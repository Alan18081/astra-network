import {PaginationParams} from '../../common/dto/pagination-params.dto';
import {IsBooleanString, IsNumberString, IsString} from 'class-validator';

export class FindParamsDto extends PaginationParams {
  @IsNumberString() userId?: number;
  @IsBooleanString() includeMessages?: number;
}