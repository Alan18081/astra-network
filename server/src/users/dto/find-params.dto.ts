import {PaginationParams} from '../../common/dto/pagination-params.dto';
import {IsBooleanString} from 'class-validator';

export class FindParamsDto extends PaginationParams {
  @IsBooleanString() includeComments?: boolean;
  @IsBooleanString() includeNotes?: boolean;
}