import {Module} from '@nestjs/common';
import {UsersService} from './users.service';
import {UsersController} from './users.controller';
import {CoreModule} from '../core/core.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {User} from './user.entity';

@Module({
  imports: [
    CoreModule,
    TypeOrmModule.forFeature([User])
  ],
  exports: [UsersService],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}