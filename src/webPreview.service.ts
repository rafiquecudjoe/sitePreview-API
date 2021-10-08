import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import {
  webPreview,
  Prisma
} from '@prisma/client';
import { url } from 'inspector';

@Injectable()
export class WebPreviewService {
    constructor(private prisma: PrismaService) { }
  
    async webPreview(url: string): Promise<webPreview | null> {
        return this.prisma.webPreview.findUnique({
            where: {
                url
              },
        });
    }


    // async createWebPreview(data: Prisma.webPreviewCreateInput): Promise<webPreview> {
    //     return this.prisma.webPreview.create({
    //         data :{
    //             url: url,
    //             title: title,
    //             favicon: icon,
    //             //if description is present saves in database if not saves a string
    //             description: description !== null ? "" : description,
    //           }
    //     });
    // }
    async createWebPreview1(data): Promise<webPreview> {
        return this.prisma.webPreview.create({
            data 
        });
    }
}

