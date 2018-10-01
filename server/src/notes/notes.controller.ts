import {Body, Controller, Get, Post, Query} from '@nestjs/common';
import {ApiOperation} from '@nestjs/swagger';
import {Note} from './note.entity';
import {NotesService} from './notes.service';
import {AddNoteDto} from './dto/add-note.dto';

@Controller('notes')
export class NotesController {
  constructor(
    private notesService: NotesService
  ) {}

  @Get()
  @ApiOperation({title: 'get notes'})
  async findAll(
    @Query('includeComments') includeComments: boolean,
    @Query('includeAuthor') includeAuthor: boolean
  ): Promise<Note[]> {
    return this.notesService.findAll(includeComments, includeAuthor);
  }

  @Post()
  @ApiOperation({ title: 'Add note' })
  async addNote(@Body() payload: AddNoteDto): Promise<Note> {
    return this.notesService.addNote(payload);
  }
}