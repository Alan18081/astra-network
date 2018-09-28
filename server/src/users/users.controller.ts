import {
  Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Post, Put,
  UseGuards
} from '@nestjs/common';
import {UsersService} from './users.service';
import {ApiBearerAuth, ApiOperation, ApiUseTags} from '@nestjs/swagger';
import {AuthGuard} from '@nestjs/passport';
import {User} from './user.entity';
import {CreateUserDto} from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';

@ApiUseTags('users')
@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService
  ) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ title: 'Get all users' })
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Post()
  @ApiOperation({ title: 'Create new user' })
  async create(@Body() userDto: CreateUserDto): Promise<User> {
    const user = await this.usersService.findByEmail(userDto.email);
    if(user) {
      throw new HttpException('User with this email already exists', HttpStatus.BAD_REQUEST);
    }
    return this.usersService.create(userDto);
  }

  @Put('/:id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ title: 'Update existing user' })
  async update( @Param('id') userId: number, @Body() userDto: UpdateUserDto) {
    const user = await this.usersService.findById(userId);
    if(!user) {
      throw new HttpException('User with this id doesn\'t exist', HttpStatus.NOT_FOUND);
    }
    return this.usersService.update(userDto);
  }

  @Delete('/:id')
  @HttpCode(204)
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ title: 'Remove user' })
  async remove(@Param('id') userId: number): Promise<any> {
    return this.usersService.remove(userId);
  }
}