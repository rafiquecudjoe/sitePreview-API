import { Controller, Get, Query, } from '@nestjs/common';
import { WebPreviewService } from 'src/webPreview.service';
const getMetaData = require('metadata-scraper')


@Controller('parse')
export class ParseController {
    constructor(private webPreviewService: WebPreviewService) { }
    @Get('')
    async findAll(@Query('url') url: string): Promise<any> {

        // Checks if url metadata is cached in the database
        const webPreview = await this.webPreviewService.webPreview(url)
        if (webPreview) {
            return {webPreview }
        }
        else {
            //passes the request url to the getMetaData function
            const data = await getMetaData(url)
            //destruct the data object from the response
            const { title, icon, description } = data;
              //saves to database
           const newPreview = await this.webPreviewService.createWebPreview1({
                title, favicon: icon, description, url
           })
            if(newPreview)

                return { newPreview };



        }




        return;
    }

}
