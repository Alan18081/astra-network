import {Body, Controller, Get, Param, Post, Query} from '@nestjs/common';
import {ApiOperation} from '@nestjs/swagger';
import {Note} from './note.entity';
import {NotesService} from './notes.service';
import {AddNoteDto} from './dto/add-note.dto';
import {IPaginatedResponse} from '../common/interfaces/paginated-response.inteface';

@Controller('notes')
export class NotesController {
  constructor(
    private notesService: NotesService
  ) {}

  @Get()
  @ApiOperation({title: 'get notes'})
  async findAll(@Query() query): Promise<Note[] | IPaginatedResponse<Note>> {
    if(query.limit) {
      return this.notesService.findNotesWithPagination(query);
    }
    return this.notesService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ title: 'Get note by id' })
  async findOneById(@Param('id') id, @Query() query): Promise<Note> {
    return this.notesService.findNoteById(id, query);
  }

  @Post()
  @ApiOperation({ title: 'Add note' })
  async addNote(@Body() payload: AddNoteDto): Promise<Note> {
    return this.notesService.addNote(payload);
  }
}