import { Controller, Post } from '@nestjs/common';
import { CreatorShinchungService } from './creator-shinchung.service';

@Controller('creator-shinchung')
export class CreatorShinchungController {
    constructor(private readonly shinchung: CreatorShinchungService){}

    @Post()
    async creatorShinchung(){
        return this.shinchung.shinchungFund()
    }
}
