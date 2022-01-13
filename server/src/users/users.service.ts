import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {User} from './user.entity';
import {Repository} from 'typeorm';
import {PasswordService} from '../core/password.service';
import {CreateUserDto} from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';
import {IPaginatedResponse} from '../common/interfaces/paginated-response.inteface';
import {FindParamsDto} from './dto/find-params.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private readonly passwordService: PasswordService
  ) {}

  async findAll({includeNotes, includeComments}: FindParamsDto): Promise<User[]> {
    const relations = [];
    if(includeComments) {
      relations.push('comments');
    }
    if(includeNotes) {
      relations.push('notes');
    }
    return this.usersRepository.find({
      relations
    });
  }

  async findWithPagination({includeNotes, includeComments, limit, page}: FindParamsDto): Promise<IPaginatedResponse<User>> {
    const sqlQuery = this.usersRepository.createQueryBuilder('user');
    if(includeComments) {
      sqlQuery.leftJoinAndSelect('user.comments', 'comment');
    }
    if(includeNotes) {
      sqlQuery.leftJoinAndSelect('user.notes', 'note');
    }
    const [users, totalCount] = await sqlQuery
      .offset(limit * (page - 1))
      .limit(limit)
      .getManyAndCount();
    return {
      list: users,
      page: page + 1,
      itemsPerPage: limit,
      totalCount
    }
  }

  async findById(id: string | number, {includeComments, includeNotes}: FindParamsDto = {}): Promise<User> {
    const relations = [];
    if(includeNotes) {
      relations.push('notes');
    }
    if(includeComments) {
      relations.push('comments');
    }

    return this.usersRepository.findOne(id);
  }

  async findByEmail(email: string): Promise<User> {
    return this.usersRepository.findOne({ email });
  }

  async findByEmailWithPassword(email: string): Promise<User> {
    return this.usersRepository.createQueryBuilder()
      .select('user.email', email)
      .addSelect('user.password')
      .getOne();
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