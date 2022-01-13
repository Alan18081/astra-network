import {User} from '../../users/user.entity';

export interface TokenResponse {
  expiresIn: string | number;
  accessToken: string;
  userInfo: User
}