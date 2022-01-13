import {
  Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Post, Put, Query,
  UseGuards
} from '@nestjs/common';
import {UsersService} from './users.service';
import {ApiBearerAuth, ApiOperation, ApiUseTags} from '@nestjs/swagger';
import {AuthGuard} from '@nestjs/passport';
import {User} from './user.entity';
import {CreateUserDto} from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';
import {TokenResponse} from '../auth/interfaces/token-response.interface';
import {AuthService} from 'auth/auth.service';
import {FindParams} from '../common/dto/pagination-params.dto';
import {IPaginatedResponse} from '../common/interfaces/paginated-response.inteface';

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
  async findAll(@Query() query: FindParams): Promise<User[] | IPaginatedResponse<User>> {
    if(query.limit) {
      return this.usersService.findWithPagination(query);
    }
    return this.usersService.findAll(query);
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ title: 'Get user by id' })
  async findOne(@Query() query: FindParams, @Param('id') id): Promise<User> {
    return this.usersService.findById(id, query);
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
  async update( @Param('id') userId: number, @Body() userDto: UpdateUserDto): Promise<User> {
    const user = await this.usersService.findById(userId, {});
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