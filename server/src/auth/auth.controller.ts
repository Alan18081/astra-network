import {Body, Controller, HttpException, HttpStatus, Post} from '@nestjs/common';
import {ApiOperation, ApiUseTags} from '@nestjs/swagger';
import {AuthService} from './auth.service';
import {UsersService} from '../users/users.service';
import {PasswordService} from '../core/password.service';
import {LoginDto} from './dto/login.dto';

@ApiUseTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
    private readonly passwordService: PasswordService
  ) {}

  @Post('login')
  @ApiOperation({ title: 'Login' })
  async login(@Body() { email, password }: LoginDto) {
    const user = await this.usersService.findByEmail(email);
    if(!user) {
      throw new HttpException('User was not found', HttpStatus.NOT_FOUND);
    }
    if(!this.passwordService.comparePassword(password, user.password)) {
      throw new HttpException('Password is invalid', HttpStatus.UNAUTHORIZED);
    }
    return this.authService.createToken(email, user.id);
  }
}