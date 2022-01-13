import {Injectable, UnauthorizedException} from '@nestjs/common';
import {ExtractJwt, Strategy} from 'passport-jwt';
import {PassportStrategy} from '@nestjs/passport';
import {AuthService} from './auth.service';
import {JWT_SECRET} from '../config/index';
import {JwtPayload} from './interfaces/jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: JWT_SECRET
    });
  }

  async validate(payload: JwtPayload, done: Function) {
    const user = this.authService.validateUser(payload);
    if(!user) {
      return done(new UnauthorizedException(), null);
    }
    return done(null, user);
  }
}