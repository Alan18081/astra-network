import {Injectable} from '@nestjs/common';
import {Note} from './notes.entity';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note) private readonly notesRepository: Repository<Note>
  ) {}

  async findByUserId(userId: number): Promise<Note[]> {
    return this.notesRepository.find({
      userId
    });
  }
}