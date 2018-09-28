import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ORM_CONFIG} from './config/orm.config';
import {AuthModule} from './auth/auth.module';
import {UsersModule} from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ORM_CONFIG),
    AuthModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}