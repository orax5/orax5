import { Injectable, HttpException } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { HttpService } from '@nestjs/axios';
import { EmailService } from '../../email/email.service';

@Injectable()
export class MypageService {
    constructor(private prisma: PrismaService, private readonly http: HttpService, private emailService: EmailService){}

    // 상태값이 1인 심사대기중인 목록만 뽑아옴
    // 잘된다!
    async getAllFundList(){
        const result = await this.prisma.shinchunghada.findMany({ // 관계형 테이블을 사용해서 fundMany() 사용
            where: {
                shin_ispermit: 1,
            }
        })
        if(result){
            return result;
        }else{
            throw new Error('목록조회 실패');
        }
    }

    // admin이 승인 OK 해줬을때 해줌
    // 이메일발송 추가하기
    async updatePermit(fundingID: number){
        const result = await this.prisma.shinchunghada.update({
            where:{
                shin_no : fundingID,
            },
            data: {
                shin_ispermit : 2,
            }
        })
        //console.log("@@@ result :",result)
        const wallet = result.shin_creator_address // 지갑주소
        console.log("@@ 뽑아낸 지갑주소 : ",wallet);
        
        // 지갑주소로 이메일 찾기
        const temp = await this.prisma.user.findUnique({
            where: {
                user_wallet: wallet
            }
        })
        //const email = temp.user_email
        console.log("@@@ temp : ", temp)

        // 메일로 알려주기
        //await this.emailService.sendCreatorJoinVerification(email, title, 'permit')

        if(result){
            console.log('승인처리 성공');
            console.log(result);
            
        // 여기서 funding 테이블에도 저장함
        // const insertFundingTable = 
        await this.prisma.funding.create({
            data: {
                shin_no : fundingID
            }
        })
        
        return result;
        }else{
            throw new HttpException('승인처리 실패', 400);
        }
    }

    // admin이 승인거절 했을때 실행할 함수
    // 여기서 s3에 저장한 이미지 삭제하기
    async updateReject(fundingID: number){
        if(fundingID)console.log('아이디값 잘받아옴', fundingID);
        
        const result = await this.prisma.shinchunghada.update({
            where:{
                shin_no : fundingID,
            },
            data: {
                shin_ispermit : 3,
            }
        })
        const creator = await this.prisma.shinchunghada.findFirst({
            where: {
                shin_no : fundingID,
            },
        })
        const wallet = creator.shin_creator_address // 지갑주소
        const title = creator.shin_title
        const temp = await this.prisma.user.findFirst({
            where: {
                user_wallet : wallet
            }
        })
        const email = temp.user_email;

        // 메일로 알려주기
        await this.emailService.sendCreatorJoinVerification(email, title, 'reject')


       // post 요청보내기
        // this.http.post(`http://localhost:3001/deleteS3/${title}`)


        if(result){
            console.log('승인 반려처리 성공');
            return result;
        }else{
            throw new HttpException('승인 반려처리 실패', 400);
        }
    }


    // 관계형 테이블에서 관계테이블들의 특정 컬럼 값만 뽑아오기
    async getOneFundData(adminSelectID: number){
        const result = await this.prisma.shinchunghada.findMany({
            where: {
                shin_no: adminSelectID
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
                },
            }
        })
        // console.log("@@@@@@ 여기에요 ",result);
        // console.log(typeof(result));
        const [a] = result; // result 값이 배열로나와서 구조분해 할당으로 객체 형태로 뽑아내기
        const {shin_cover} = a // 객체형태로 뽑아낸 shinData에서 이미지 주소만 뽑아오기
        const { composer} =a
        console.log("@@@ 이미지 주소: ",shin_cover);
        const [{com_name}] = composer

        console.log("@@@@ 이건요?? :",a);
        console.log("@@@ com_name : ", com_name);
        
        
        return result;
    }
}
