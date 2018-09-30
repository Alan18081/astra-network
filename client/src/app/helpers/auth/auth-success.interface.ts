import {IUser} from '../models/user.model';
export interface IAuthSuccess {
  accessToken: string;
  userInfo: IUser;
  expiresIn: number | string;
}
