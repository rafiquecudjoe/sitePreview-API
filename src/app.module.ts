import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParseController } from './parse/parse.controller';
import { PrismaService } from './prisma.service';
import { WebPreviewService } from './webPreview.service';


@Module({
  imports: [],
  controllers: [AppController, ParseController],
  providers: [AppService,WebPreviewService,PrismaService],
})
export class AppModule {}
