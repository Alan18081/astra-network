import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {User} from './user.entity';
import {Repository} from 'typeorm';
import {PasswordService} from '../core/password.service';
import {CreateUserDto} from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private readonly passwordService: PasswordService
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findById(id: string | number): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  async findByEmail(email: string): Promise<User> {
    return this.usersRepository.findOne({ email });
  }

  async create(userDto: CreateUserDto): Promise<User> {
    const password = this.passwordService.generatePassword(userDto.password);
    const user = {
      ...new User(),
      ...userDto,
      password
    };
    return this.usersRepository.save(user);
  }

  async update(userDto: UpdateUserDto): Promise<User> {
    await this.usersRepository.update({ id: userDto.id }, userDto);
    return this.usersRepository.findOne(userDto.id);
  }

  async remove(id: number): Promise<any> {
    return this.usersRepository.delete({ id });
  }

 }