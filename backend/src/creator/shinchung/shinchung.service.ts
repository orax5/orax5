import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Shinchunghada } from '@prisma/client';
import { PrismaService } from '../../prisma.service';
import { CreatorShinChungDto } from '../creator_dto/shinchung.dto';

@Injectable()
export class CreatorShinchungService {
    constructor(private readonly prisma: PrismaService){}

    shinchungFund(shinchungData: CreatorShinChungDto): Promise<any>{
        try {
            const result = this.prisma.shinchunghada.create({
                data: {
                    shin_amount: shinchungData.shin_amount,
                    shin_nft_totalbalance: shinchungData.shin_nft_totalbalance,
                    shin_cover: shinchungData.shin_cover,
                    shin_opendate: shinchungData.shin_opendate,
                    shin_description: shinchungData.shin_description,
                    shin_category: shinchungData.shin_category,
                    shin_creator_address: shinchungData.shin_creator_address,
                        composer: {
                            create: [
                                {
                                    com_name: shinchungData.com_name,
                                },
                            ],
                        },
                        lyricist: {
                            create: [
                                {
                                    lyric_name: shinchungData.lyric_name,
                                }
                            ]
                        },
                        singer: {
                            create:[
                                {
                                    sing_name: shinchungData.sing_name,
                                }
                            ]
                        },
                },
            })
            return result;
        } catch (error) {
            throw new HttpException('신청데이터가 누락되었습니다.', HttpStatus.BAD_REQUEST)
        }
    }
}
