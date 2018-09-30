import {Module} from '@nestjs/common';
import {NotesGateway} from './notes.gateway';
import {NotesService} from './notes.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Note} from './notes.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Note])
  ],
  providers: [NotesGateway, NotesService]
})
export class NotesModule {}