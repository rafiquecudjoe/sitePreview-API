import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { WebPreviewService } from "./webPreview.service"
// import {webPreview as webPreviewModel} from "@prisma/client"

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly webPreview: WebPreviewService

  
  ) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
