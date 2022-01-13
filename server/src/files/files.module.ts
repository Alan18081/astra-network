import {Module, MulterModule} from '@nestjs/common';
import {FilesController} from './files.controller';
import {FilesService} from './files.service';
import * as path from 'path';
import {TypeOrmModule} from '@nestjs/typeorm';
import {File} from './file.entity';

@Module({
  imports: [
    MulterModule.register({
      dest: path.join(__dirname, '../../uploads')
    }),
    TypeOrmModule.forFeature([File])
  ],
  controllers: [FilesController],
  providers: [FilesService]
})
export class FilesModule {}