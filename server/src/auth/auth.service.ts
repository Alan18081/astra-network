import {Injectable} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import {TokenResponse} from './interfaces/token-response.interface';
import {JwtPayload} from './interfaces/jwt-payload.interface';
import {JWT_EXPIRES, JWT_SECRET} from '../config/index';
import {UsersService} from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService
  ) {}

  async createToken(email: string, id: number): Promise<TokenResponse> {
    const token = jwt.sign({email, id}, JWT_SECRET, {expiresIn: JWT_EXPIRES});
    return {
      expires_in: JWT_EXPIRES,
      access_token: token
    }
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    return this.usersService.findById(payload.id);
  }
}