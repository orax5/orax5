import { Controller, Get, Post, Param } from '@nestjs/common';
import { MypageService } from './mypage.service';

@Controller('admin')
export class MypageController {
  constructor(private readonly mypageService: MypageService) {}

  @Get('/mypage')
  async adminFundingList() {
    return await this.mypageService.getAllFundList();
  }

  @Post('/mypage/permit/:id')
  async adminPermit(@Param('id') fundingID: string) {
    const adminSelectID = parseInt(fundingID);
    return await this.mypageService.updatePermit(adminSelectID);
  }

  @Post('/mypage/reject/:id')
  async adminReject(@Param('id') fundingID: string) {
    const adminSelectID = parseInt(fundingID);
    return await this.mypageService.updateReject(adminSelectID);
  }

  @Get('/mypage/:id')
  async getOneFunding(@Param('id') fundingID: string) {
    const adminSelectID = parseInt(fundingID);
    return await this.mypageService.getOneFundData(adminSelectID);
  }
}
