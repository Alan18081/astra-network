import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Comment} from './comment.entity';
import {Repository} from 'typeorm';
import {User} from '../users/user.entity';
import {AddCommentDto} from './dto/add-comment.dto';
import {Note} from '../notes/note.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentsRepository: Repository<Comment>
  ) {}

  async addComment(payload: AddCommentDto, note: Note): Promise<Comment> {
    const newComment = {
      ...new Comment(),
      ...payload,
      note,
      createdAt: new Date().toISOString()
    };
    return this.commentsRepository.save(newComment);
  }

  async removeComment(id: number): Promise<any> {
    return this.commentsRepository.delete({id});
  }

}