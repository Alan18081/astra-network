import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Chat} from './chat.entity';
import {Repository} from 'typeorm';
import {AddChatDto} from './dto/add-chat.dto';
import {User} from '../users/user.entity';
import {FindParamsDto} from './dto/find-params.dto';
import {UpdateChatDto} from './dto/update-chat.dto';

@Injectable()
export class ChatsService {
  constructor(
    @InjectRepository(Chat)
    private readonly chatsRepository: Repository<Chat>
  ) {}

  async findAll(query: FindParamsDto) {
    const sqlQuery = this.chatsRepository.createQueryBuilder('chat').select();

    if(query.userId) {
      sqlQuery.where('chat.userId = :id', {id: query.userId});
    }

    if(query.includeMessages) {
      sqlQuery.leftJoinAndSelect('chat.messages', 'message');
    }

    return sqlQuery.getMany();

  }

  async findById(id: number, query: FindParamsDto): Promise<Chat> {
    const relations = [];
    if(query.includeMessages) {
      relations.push('messages');
    }
    return this.chatsRepository.findOne({
      id
    }, {
      relations
    });
  }

  async addChat(payload: AddChatDto): Promise<Chat> {
    const newChat = {
      ...new Chat(),
      ...payload,
      users: payload.users.map(id => ({ id }) as User)
    };
    return this.chatsRepository.save(newChat);
  }

  async updateChat(payload: UpdateChatDto, query: FindParamsDto): Promise<Chat> {
    await this.chatsRepository.update({
      id: payload.id
    }, {
      ...payload
    });
    return this.findById(payload.id, query);
  }
}