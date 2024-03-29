import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Message} from './message.entity';
import {Repository} from 'typeorm';
import {AddMessageDto} from './dto/add-message.dto';
import {User} from '../users/user.entity';
import {UpdateMessageDto} from './dto/update-message.dto';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message)
    private readonly messagesRepository: Repository<Message>
  ) {}

  async addMessage(payload: AddMessageDto): Promise<Message> {
    const newMessage = {
      ...new Message(),
      text: payload.text,
      author: { id: payload.authorId } as User,
      createdAt: new Date().toISOString()
    };
    await this.messagesRepository.save(newMessage);
    return this.messagesRepository.findOne({ relations: ['author'] });
  }

  async updateMessage(payload: UpdateMessageDto): Promise<Message> {
    await this.messagesRepository.update(
      {
        id: payload.id
      },
      {
        text: payload.text,
      }
    );
    return this.messagesRepository.findOne({ relations: ['author'] });
  }

  async removeMessage(id: number): Promise<any> {
    return this.messagesRepository.delete({id});
  }

}