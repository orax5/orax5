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
        // fund 테이블 state값 바꿔주기
        await this.prisma.funding.update({
            where: {
                shin_no : shinNo,
            },
            data: {
                fund_state: 2,
            }
        })

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
            신청할 때 
            제목 카테고리 작곡가 작사가 가수 설명 발행량 목표금액 펀딩시작날짜
        */
        const [temp] = getobj;
        // 일단 다뽑아서 던져주자
        const { shin_title } = temp;
        const { shin_category } = temp; 
        const { shin_description } = temp; 
        const { shin_amount } = temp; 
        const { shin_nft_totalbalance } = temp; 
        const { shin_opendate } = temp; 
        // 작곡작사가 가수 설명등
        const {composer} = temp
        const {lyricist} = temp
        const {singer} = temp
        const [{com_name}] = composer
        const [{lyric_name}] = lyricist
        const [{sing_name}] = singer
        
        // 앞단에 던져줄 데이터
        const sendData ={
            title: shin_title,
            category : shin_category,
            composer : com_name,
            lyricist : lyric_name,
            singer : sing_name,
            description : shin_description,
            totalbalance : shin_nft_totalbalance,
            amount : shin_amount,
            opendate : shin_opendate
        }
        

        // 앞단에 민팅 함수에 넣어줄 값 던져주기
        // 해당 펀딩아이디로 신청하다 테이블에서 뽑아서 객체로 던져주기

        return sendData;
    }
}




    // 여기부터 메타데이터 올리는 함수

    // client = new NFTStorage({
    //     token: process.env.NFT_Storage,
    //   });
    //   async ipfsUpload(file: Express.Multer.File): Promise<any> {
    //     // 이미지 파일을 따로 올리지 않기때문에 이부분은 필요없다
    //     // const fileCid = await this.client.storeBlob(new Blob([file.buffer]));
    //     const fileUrl = "" // 여기에 db에 저장된 s3주소 집어넣어주면됨
    //     // 'https://' + fileCid + '.ipfs.nftstorage.link';

    //     const obj = {
    //       name: 'The Sample Text',
    //       information: 'This is a sample text file.',
    //       creator: 'Michelle Branagah',
    //       file_url: fileUrl,
    //     };
    
    //     const metadata = new Blob([JSON.stringify(obj)], {
    //       type: 'application/json',
    //     });
    //     const metadataCid = await this.client.storeBlob(metadata);
    //     const metadataUrl = 'https://' + metadataCid + '.ipfs.nftstorage.link';
    //     return { fileUrl, metadataUrl };
    //   }


/*
        // db에서 뽑은 객체 JSON으로 변환하기
        // stringify json 문자열로 바꿔줌
  
        //const metaData = JSON.stringify(result);

        // db에서 뽑은 객체값 그대로 넣음
        //this.getMetaData(result, shinNo);


        // JSON으로 변환한 메타데이터 파일로 저장하기
        // this.saveMetaData(metaData, shinNo); 

        // metaDATA 잘 저장됐는지 확인하기
        // this.readMetaJson(shinNo);
*/

/*
    getImageCID()
               const PINATA_TOKEN = this.config.get('PINATA_JWT_TOKEN');
            //const axiosInstance = axios.create()
     
                const SRC = imgURL; // 이미지 url

                const axiosInstance = axios.create();
                const formData = new FormData();
                

                // axiosRef == AxiosInstance
                const response = await this.http.axiosRef(SRC, {
                    method: 'GET',
                    responseType: 'stream',
                });
                formData.append('file', response.data);

                try {
                    const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
                        maxBodyLength: "Infinity",
                        headers: {
                            'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
                            'Authorization': PINATA_TOKEN
                        }
                      })
                      console.log(res.data)
                } catch (error) {
                    console.log(error)
                }
                // const file = fs.createReadStream(src);
                // formData.append('coverIMG', file);
*/

/*
                
    // 피나타 api로 json 보내고 url 받아오기
    // npm install --save @pinata/sdk
    private postPinata(metaData: string){
        const PINATA_API_KEY = this.config.get('PINATA_API_KEY');
        const PINATA_SCRETKET = this.config.get('PINATA_SECRET_KEY');
   
        // API키로 피나타 연결
        const pinata = new pinataSDK({  pinataApiKey : PINATA_API_KEY ,  pinataSecretApiKey : PINATA_SCRETKET } )
            // 피나타 연결됐는지 확인
            pinata.testAuthentication().then((result)=>{
                console.log(result);
                // 연결 성공했다면 메타데이터 json 그대로 보내기
                // response 데이터 형태 밑에있음
                const response = pinata.pinJSONToIPFS(metaData);
          
            }).catch((err)=>{
                console.log(err);
                throw new Error(' 피나타 연결 실패')
            })
        }

        
         response 형태

        {
            IpfsHash: This is the IPFS multi-hash provided back for your content,
            PinSize: This is how large (in bytes) the content you just pinned is,
            Timestamp: This is the timestamp for your content pinning (represented in ISO 8601 format)
        }
        

*/