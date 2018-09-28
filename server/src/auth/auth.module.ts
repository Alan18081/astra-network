import {Module} from '@nestjs/common';
import {CoreModule} from '../core/core.module';
import {UsersModule} from '../users/users.module';
import {AuthController} from './auth.controller';
import {AuthService} from './auth.service';
import {JwtStrategy} from './jwt.strategy';

@Module({
  imports: [CoreModule, UsersModule],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy]
})
export class AuthModule {

}