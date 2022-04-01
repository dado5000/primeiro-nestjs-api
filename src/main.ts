import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // config global para validação de dados
  app.useGlobalPipes(new ValidationPipe({ errorHttpStatusCode: 422 }));

  // config swagger
  const config = new DocumentBuilder()
    .setTitle('Esquenta Imersão 7.0 API REST com Nestjs')
    .setDescription('Minhas primeira API REST com Nestjs - Daverson')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
