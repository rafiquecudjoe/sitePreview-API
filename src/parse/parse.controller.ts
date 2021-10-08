import { Controller, Get, Query, } from '@nestjs/common';
import { WebPreviewService } from 'src/webPreview.service';
const getMetaData = require('metadata-scraper')


@Controller('parse')
export class ParseController {
    constructor(private webPreviewService: WebPreviewService) { }
    @Get('')
    async findAll(@Query('url') url: string): Promise<any> {


        const webPreview = await this.webPreviewService.webPreview(url)
        if (webPreview) {
            return webPreview
        }
        const data = await getMetaData(url)

        const { title, icon, description } = data;

        console.log(data)

        return this.webPreviewService.createWebPreview1({
            title, favicon: icon, description, url
        })




        return { title, icon, description };
    }

}
