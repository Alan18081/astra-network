import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Comment} from './comment.entity';
import {Repository} from 'typeorm';
import {AddCommentDto} from './dto/add-comment.dto';
import {Note} from '../notes/note.entity';
import {User} from '../users/user.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentsRepository: Repository<Comment>
  ) {}

  async addComment(payload: AddCommentDto): Promise<Comment> {
    const newComment = {
      ...new Comment(),
      text: payload.text,
      author: { id: payload.authorId } as User,
      note: { id: payload.noteId  } as Note,
      createdAt: new Date().toISOString()
    };
    await this.commentsRepository.manager
      .createQueryBuilder()
      .relation(Note, 'comments')
      .of(payload.noteId)
      .add(newComment);

    return this.commentsRepository.save(newComment);
  }

  async removeComment(id: number): Promise<any> {
    return this.commentsRepository.delete({id});
  }

}