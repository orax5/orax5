import { Controller, Post, Param, Delete } from '@nestjs/common';
import { DeleteService } from './delete.service';

@Controller('deleteS3')
export class DeleteController {
    constructor(private deleteService: DeleteService){}

    // 펀딩신청 거절되면 이미지 삭제
    @Delete('/:id')
    async deleteS3image(@Param('id') s3filename: string){
        const result = await this.deleteService.deleteFile(s3filename);
        if(result){
            console.log("s3 잘 삭제되었음")
        }
    }
}
