import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule,DocumentBuilder } from '@nestjs/swagger';
import {PrismaService} from './prisma.service'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Site Preview example')
    .setDescription('Site Preview API description')
    .setVersion('1.0')
    .build();
  
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/', app, document);
  
  
  const prismaservice: PrismaService = app.get(PrismaService)
  prismaservice.enableShutdownHooks(app)
  await app.listen(4000);
}
bootstrap();
