import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {Note} from './note.entity';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {INotesService} from './interfaces/notes-service.interface';
import {AddNoteDto} from './dto/add-note.dto';
import {UpdateNoteDto} from './dto/update-note.dto';
import {CommentsService} from '../comments/comments.service';
import {AddCommentToNoteDto} from './dto/add-comment-to-note.dto';
import {UsersService} from '../users/users.service';
import {User} from '../users/user.entity';
import {Comment} from '../comments/comment.entity';

@Injectable()
export class NotesService implements INotesService {
  constructor(
    @InjectRepository(Note) private readonly notesRepository: Repository<Note>,
    private readonly commentsService: CommentsService,
    private readonly usersService: UsersService
  ) {}

  findAll(includeComments: boolean, includeAuthor: boolean): Promise<Note[]> {
    const relations = [];
    if(includeComments) {
      relations.push('comments');
    }
    if(includeAuthor) {
      relations.push('author');
    }
    return this.notesRepository.find({
      relations
    });
  }

  async findNoteById(id: number, includeComments: boolean, includeAuthor: boolean): Note {
    const note = await this.notesRepository.findOne(id);
    if(includeAuthor) {
      note.author = await this.notesRepository
        .createQueryBuilder()
        .relation(User, 'author')
        .of(note)
        .loadOne();
    }
    if(includeComments) {
      note.comments = await this.notesRepository
        .createQueryBuilder()
        .relation(Comment, 'comments')
        .of(note)
        .loadMany();
    }
    return note;
  }

  async addNote(payload: AddNoteDto): Promise<Note> {
    const author = await this.usersService.findById(payload.authorId);
    if(!author) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    const newNote = {
      ...new Note(),
      ...payload,
      author,
      createdAt: new Date().toISOString()
    };
    return this.notesRepository.save(newNote);
  }

  async addCommentToNote(payload: AddCommentToNoteDto): Promise<Note> {
    const note = await this.findNoteById(payload.noteId, false, false);
    const newComment = await this.commentsService.addComment(payload, note);
    await this.notesRepository
      .createQueryBuilder()
      .relation(Comment, 'comments')
      .add(newComment);

    return this.notesRepository
      .createQueryBuilder('note')
      .leftJoinAndSelect('note.comments', 'comment')
      .getOne();
  }

  async updateNote(payload: UpdateNoteDto): Promise<Note> {
    await this.notesRepository.update(
      {
        id: payload.id
      },
      {
        ...payload
      }
    );
    return this.findNoteById(payload.id);
  }

  removeNote(id: number): Promise<any> {
    return this.notesRepository.delete({id});
  }
}