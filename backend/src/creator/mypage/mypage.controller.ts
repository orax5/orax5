import { Controller, Get, Param } from '@nestjs/common';
import { MypageService } from './mypage.service';

@Controller('creator/mypage')
export class MypageController {
  constructor(private creatorMypageService: MypageService) {}

  // 마이페이지 펀딩 리스트 뽑아줌
  @Get('/:id')
  async creatorMypage(@Param('id') creatorAddress: string) {
    //const fundNo = parseInt(id);
    return await this.creatorMypageService.getmypage(creatorAddress);
  }
}
