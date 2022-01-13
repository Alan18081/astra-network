import {Body, Controller, HttpException, HttpStatus, Post, Req, Get, UseGuards} from '@nestjs/common';
import {ApiOperation, ApiUseTags} from '@nestjs/swagger';
import {AuthService} from './auth.service';
import {UsersService} from '../users/users.service';
import {PasswordService} from '../core/password.service';
import {LoginDto} from './dto/login.dto';
import {AuthGuard} from '@nestjs/passport';

@ApiUseTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
    private readonly passwordService: PasswordService
  ) {}

  @Get('currentUser')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ title: 'Get user by token' })
  async getUser(@Req() req) {
    return req.user;
  }

  @Post('login')
  @ApiOperation({ title: 'Login' })
  async login(@Body() { email, password }: LoginDto) {
    const user = await this.usersService.findByEmailWithPassword(email);
    if(!user) {
      throw new HttpException('User was not found', HttpStatus.NOT_FOUND);
    }
    if(!this.passwordService.comparePassword(password, user.password)) {
      throw new HttpException('Password is invalid', HttpStatus.UNAUTHORIZED);
    }
    return this.authService.createToken(email, user);
  };
}