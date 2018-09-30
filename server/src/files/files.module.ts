import {Module, MulterModule} from '@nestjs/common';
import {FilesController} from './files.controller';
import {FilesService} from './files.service';
import * as path from 'path';

@Module({
  imports: [
    MulterModule.register({
      dest: path.join(__dirname, '../../uploads')
    })
  ],
  controllers: [FilesController],
  providers: [FilesService]
})
export class FilesModule {}