import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { resourceLimits } from 'worker_threads';

@Injectable()
export class MypageService {
  constructor(private prisma: PrismaService) {}

  // 카테고리, 음원명, 총 발행량, 목표금액, 펀딩기간, 상태만 뽑아주기
  // 여기에 funding 테이블에서 shin_no에 해당하는 fund_state도 같이 뽑아주기
  async getmypage(creatorAddress: string) {
    const result = await this.prisma.shinchunghada.findMany({
      where: {
        shin_creator_address: creatorAddress,
      },
      select: {
        shin_no: true,
        shin_category: true,
        shin_title: true,
        shin_amount: true,
        shin_nft_totalbalance: true,
        shin_period: true,
        shin_ispermit: true,
      },
    });
    console.log('@@ 크리에이터 마이페이지', result[0].shin_no);

    // 닉네임가능하면 던져주기
    return result;
  }

  async getfundState() {
    const result = this.prisma.funding.findMany();
  }
}
