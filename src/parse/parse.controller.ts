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
           
                  
            //destructs the webPreview object and sends to user
            let { title, favicon, description } = webPreview
            return { title, favicon, description }
        }
        else {

           
            //passes the request url to the getMetaData function
            const data = await getMetaData(url)

            //destruct the data object from the response
            const { title, icon, description } = data;

            //saves to database
            await this.webPreviewService.createWebPreview1({
                title, favicon: icon, description, url
            })

            //sends response to user
            return { title, favicon: icon, description };



        }




        return;
    }

}
