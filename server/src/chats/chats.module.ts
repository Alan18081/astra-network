import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Chat} from './chat.entity';
import {ChatsService} from './chats.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Chat])
  ],
  providers: [ChatsService],
  controllers: [],
  exports: []
})
export class ChatsModule {}