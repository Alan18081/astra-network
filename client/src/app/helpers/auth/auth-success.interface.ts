import {User} from '../models/user.model';

export interface IAuthSuccess {
  accessToken: string;
  userInfo: User;
  expiresIn: number | string;
}
