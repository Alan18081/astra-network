import {IsInstance, IsString} from 'class-validator';
import {User} from '../../users/user.entity';

export class AddCommentDto {
  @IsString() text: string;
  @IsInstance(User) author: User;
}