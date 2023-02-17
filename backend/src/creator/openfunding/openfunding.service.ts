import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';

import { NFTStorage, File, Blob } from 'nft.storage';
import mime from 'mime';
import fs from 'fs';
import path from 'path';
import { CreatorShinChungDto } from '../creator_dto/shinchung.dto';
import { Shinchunghada } from '@prisma/client';
import { resourceLimits } from 'worker_threads';

@Injectable()
export class OpenfundingService {
    constructor(
        private prisma: PrismaService, 
        private readonly config: ConfigService
        ){}

    // 신청아이디 받아서 db에서 추출한다음 JSON으로 변환하기
    // 아이디만 받아서 db에서 꺼내자 //, openData: CreatorShinChungDto
    async openFunding(shinNo: number):Promise<any>{
        // result => object 일거임
        // fund 테이블의 state값 바꿔주기
        await this.prisma.funding.update({
            where: {
                shin_no : shinNo,
            },
            data: {
                fund_state: 2,
            }
        })
        // funding 테이블 fund_no로 변경함
        const tokenId = await this.prisma.funding.findFirst({
            where: {
                shin_no: shinNo
            },
            select:{
                fund_no: true,
            }
        })

        console.log("fund_no 추출", tokenId)

        // 처음 row값 다 뽑기
        const getobj = await this.prisma.shinchunghada.findMany({
            where: {
                shin_no: shinNo
            },
            include:{
                singer: {
                    select: {
                        sing_name: true,
                    }
                },
                composer: {
                    select:{
                        com_name: true,
                    }
                },
                lyricist: {
                    select: {
                        lyric_name: true,
                    }
                }
            }
        })

        /*
            신청할 때 shinchung 테이블에 들어있는 내용
            제목 카테고리 작곡가 작사가 가수 설명 발행량 목표금액 펀딩시작날짜
        */
       // 구조분해 할당
        const [temp] = getobj;
        // 일단 다뽑아서 던져주자
        const { shin_title } = temp;
        const { shin_category } = temp; 
        const { shin_description } = temp; 
        const { shin_amount } = temp; 
        
        const { shin_nft_totalbalance } = temp; 
        const { shin_period } = temp; 
        // 작곡작사가 가수 설명등
        const {composer} = temp
        const {lyricist} = temp
        const {singer} = temp
        const [{com_name}] = composer
        const [{lyric_name}] = lyricist
        const [{sing_name}] = singer
        
        // 메타데이터 url 추출
        const data = await this.prisma.funding.findFirst({
            where:{
                shin_no : shinNo
            }
        })

      // 여기서 ispermit 값이 변경하면 funding테이블에 fund_state 값 1로 생성
      const metaDataurl = data.fund_pinurl;
      const fundState = data.fund_state
      // 앞단에 던져줄 데이터
      // 토큰아이디(fund_no), 발행량, 총금액, 메타데이터url, 기간
      const sendData = {
          tokenId : shinNo,
          balance : shin_nft_totalbalance,
          totalPrice : shin_amount,
          opendate : shin_period,
          metaData : metaDataurl,
          fundState : fundState
      }
        // 여기서 fund_state upsert로 변경해주기


}
