import {Module} from '@nestjs/common';
import {NotesGateway} from './notes.gateway';
import {NotesService} from './notes.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Note} from './note.entity';
import {Comment} from '../comments/comment.entity';
import {CommentsService} from '../comments/comments.service';
import {UsersModule} from '../users/users.module';
import {CommentsModule} from '../comments/comments.module';
import {NotesController} from './notes.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Note, Comment]),
    UsersModule,
    CommentsModule
  ],
  controllers: [NotesController],
  providers: [NotesGateway, NotesService, CommentsService]
})
export class NotesModule {}