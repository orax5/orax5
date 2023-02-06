// 타협안


// import { Injectable } from '@nestjs/common';
// import { PrismaService } from '../../prisma.service';
// import { ConfigService } from '@nestjs/config';
// import { HttpService } from '@nestjs/axios';

// import { NFTStorage, File } from 'nft.storage';
// import mime from 'mime';
// import fs from 'fs';
// import path from 'path';
// import { CreatorShinChungDto } from '../creator_dto/shinchung.dto';

// @Injectable()
// export class OpenfundingService {
//     constructor(private prisma: PrismaService, private readonly config: ConfigService, private http: HttpService){}

//     // 신청아이디 받아서 db에서 추출한다음 JSON으로 변환하기
//     // 아이디만 받아서 db에서 꺼내자 //, openData: CreatorShinChungDto
//     async openFunding(shinNo: number){
//         // result => object 일거임
//         const result = this.prisma.shinchunghada.findUnique({
//             where:{ shin_no : shinNo }
//         })
//         const imgURL = (await result).shin_cover; // 이미지 url만 뽑기

//         // db에서 뽑은 객체 JSON으로 변환하기
//         // stringify json 문자열로 바꿔줌
  
//         const metaData = JSON.stringify(result);

//         // db에서 뽑은 객체값 그대로 넣음
//         this.getMetaData(await result, shinNo);


//         console.log('@@@@@');
//         console.log(metaData);
//          // JSON으로 변환한 메타데이터 파일로 저장하기
//          this.saveMetaData(metaData, shinNo); 

//          // metaDATA 잘 저장됐는지 확인하기
//          this.readMetaJson(shinNo);



//     }

//     // 로컬에 파일저장해주기 // writeFileSync는 예외를 try{} catch{} 로 처리해줘야함
//     // metaData: string 맞음 JSON.stringify() 가 우리가 보기엔 json 같지만 string타입임
//     private saveMetaData(metaData: string, shinNo: number){
//         if(metaData){
//             // 파일저장할 경로, 기록될 데이터, 옵션함수
//             fs.writeFile( `${shinNo}`, metaData, 
//                 (err)=> {
//                     if(err){
//                         console.log(err);
//                         throw new Error('META 데이터 파일저장 실패');
//                     }else{
//                         console.log(' META 데이터 파일저장 성공! ');
//                     } 
//                 });
//             }
//         }

//     // 메타데이터 저장한 json 파일 확인/ 읽어오기
//     private readMetaJson(shinNo: number){
//         fs.readFile(`${shinNo}.json`,"utf-8", (err, data)=>{
//             if (err) {
//                 console.error(err);
//               } else {
//                 console.log('잘 저장했다');
//                 console.log(data);
//               }
//          })
//     }

//     // 이미지 경로 ipfs:// 로 바꾼다음에 저장해여함!!!
    
//         // 커버사진 IPFS로 올리고 CID 받기
//         // name : db에 저장한 id: 숫자 값이지만 string d으로 저장되어야 하기때문에 string
//         async getMetaData(shinchungForm: CreatorShinChungDto, shinNo: number){
//             const name = shinNo.toString(); // db에서 뽑은 값이 숫자인데 문자열을 넣어줘야함
//             const description = shinchungForm.shin_description;
//             const totalbalance = shinchungForm.shin_nft_totalbalance;
//             const category = shinchungForm.shin_category;
            
             
//             const imgURL = shinchungForm.shin_cover;
//             const image = await this.fileFromPath(imgURL);
//             const API_KEY = this.config.get('NFT_Storage');
//             const nftstorage = new NFTStorage({ token : API_KEY });

//             //  nft storage에 저장
//             return nftstorage.store({
//                 image,
//                 name,
//                 description,
//                 totalbalance,
//                 category,
//             })
//         }

//         // 이미지 파일 CID얻어오는 함수
//         async fileFromPath(imgURL: string) {
//             const content = await fs.promises.readFile(imgURL);
//             const type = mime.getType(imgURL);
//             return new File([content], path.basename(imgURL), {type})
//         }

    
// }




// /*
//     getImageCID()
//                const PINATA_TOKEN = this.config.get('PINATA_JWT_TOKEN');
//             //const axiosInstance = axios.create()
     
//                 const SRC = imgURL; // 이미지 url

//                 const axiosInstance = axios.create();
//                 const formData = new FormData();
                

//                 // axiosRef == AxiosInstance
//                 const response = await this.http.axiosRef(SRC, {
//                     method: 'GET',
//                     responseType: 'stream',
//                 });
//                 formData.append('file', response.data);

//                 try {
//                     const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
//                         maxBodyLength: "Infinity",
//                         headers: {
//                             'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
//                             'Authorization': PINATA_TOKEN
//                         }
//                       })
//                       console.log(res.data)
//                 } catch (error) {
//                     console.log(error)
//                 }
//                 // const file = fs.createReadStream(src);
//                 // formData.append('coverIMG', file);
// */

// /*
                
//     // 피나타 api로 json 보내고 url 받아오기
//     // npm install --save @pinata/sdk
//     private postPinata(metaData: string){
//         const PINATA_API_KEY = this.config.get('PINATA_API_KEY');
//         const PINATA_SCRETKET = this.config.get('PINATA_SECRET_KEY');
   
//         // API키로 피나타 연결
//         const pinata = new pinataSDK({  pinataApiKey : PINATA_API_KEY ,  pinataSecretApiKey : PINATA_SCRETKET } )
//             // 피나타 연결됐는지 확인
//             pinata.testAuthentication().then((result)=>{
//                 console.log(result);
//                 // 연결 성공했다면 메타데이터 json 그대로 보내기
//                 // response 데이터 형태 밑에있음
//                 const response = pinata.pinJSONToIPFS(metaData);
          
//             }).catch((err)=>{
//                 console.log(err);
//                 throw new Error(' 피나타 연결 실패')
//             })
//         }

        
//          response 형태

//         {
//             IpfsHash: This is the IPFS multi-hash provided back for your content,
//             PinSize: This is how large (in bytes) the content you just pinned is,
//             Timestamp: This is the timestamp for your content pinning (represented in ISO 8601 format)
//         }
        

// */