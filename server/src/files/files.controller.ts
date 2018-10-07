import {Body, FilesInterceptor, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {Controller} from '@nestjs/common';
import {FilesService} from './files.service';
import {AddFileDto} from './dto/add-file.dto';


@Controller('files')
export class FilesController {

  constructor(
    private readonly filesService: FilesService
  ) {}

  @Post()
  @UseInterceptors(FilesInterceptor('files'))
  async uploadFile(@UploadedFile() files, @Body() body: AddFileDto): Promise<any> {
    return Promise.all(
      files.map((file) => this.filesService.saveFile(file, body.noteId))
    );
  }
}