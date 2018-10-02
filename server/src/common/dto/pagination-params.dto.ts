import {IsBooleanString, IsNumberString} from 'class-validator';

export class PaginationParams {
  @IsNumberString() limit?: number;
  @IsNumberString() page?: number;
  @IsBooleanString() includeComments?: boolean;
}