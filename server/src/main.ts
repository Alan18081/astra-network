import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger';
import * as helmet from 'helmet';
import {ValidationPipe} from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.use(helmet());
  app.enableCors();
  const options = new DocumentBuilder()
    .setTitle('Astra Network REST API')
    .setDescription('Social network')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app,options);
  SwaggerModule.setup('/api-docs', app, document);
  await app.listen(3000);
}
bootstrap();
