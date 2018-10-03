import {Injectable} from '@nestjs/common';
import {Note} from './note.entity';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {AddNoteDto} from './dto/add-note.dto';
import {UpdateNoteDto} from './dto/update-note.dto';
import {IPaginatedResponse} from '../common/interfaces/paginated-response.inteface';
import {User} from '../users/user.entity';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note) private readonly notesRepository: Repository<Note>,
  ) {}

  findAll(query): Promise<Note[]> {
    const relations = [];
    const {includeComments, includeAuthor} = query;
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

  async findNotesWithPagination(query): Promise<IPaginatedResponse<Note>> {
    const {limit, page = 1, includeComments, includeAuthor} = query;
    const sqlQuery = this.notesRepository
      .createQueryBuilder('note')
      .select('note');
    if(includeAuthor) {
      sqlQuery.leftJoinAndSelect('note.author', 'author');
    }
    if(includeComments) {
      sqlQuery.leftJoinAndSelect('note.comments', 'comment');
    }
    const [notes, totalCount] = await sqlQuery
      .limit(limit)
      .offset(limit * (page - 1))
      .getManyAndCount();
    return {
      list: notes,
      page: +page + 1,
      itemsPerPage: limit,
      totalCount
    };
  }

  async findNoteById(id: number, query): Promise<Note> {
    const {includeAuthor, includeComments} = query;
    const sqlQuery = this.notesRepository
      .createQueryBuilder('note');
    if(includeAuthor) {
      sqlQuery.leftJoinAndSelect('note.author', 'author');
    }
    if(includeComments) {
      sqlQuery.leftJoinAndSelect('note.comments', 'comment');
    }
    return sqlQuery.where('note.id = :id', {id}).getOne();
  }

  async addNote(payload: AddNoteDto): Promise<Note> {
    const newNote = {
      ...new Note(),
      ...payload,
      author: { id: payload.authorId } as User,
      createdAt: new Date().toISOString()
    };
    await this.notesRepository.save(newNote);
    return this.notesRepository.findOne({ id: newNote.id });
  }

  async updateNote(payload: UpdateNoteDto, query): Promise<Note> {
    await this.notesRepository.update(
      {
        id: payload.id
      },
      {
        ...payload
      }
    );
    return this.findNoteById(payload.id, query);
  }

  removeNote(id: number): Promise<any> {
    return this.notesRepository.delete({id});
  }
}