import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma.service";
import fs from "fs";
import { ConfigService } from "@nestjs/config";
import { HttpService } from "@nestjs/axios";
import { Observable } from "rxjs";

// const fs = require('fs');
// const path = require('path');
// const filePath = path.join(__dirname, 'metaDataJson')
const pinataSDK = require("@pinata/sdk");
const FormData = require("nestjs-form-data");
const axios = require("@nestjs/axios");

@Injectable()
export class OpenfundingService {
  constructor(private prisma: PrismaService, private readonly config: ConfigService, private http: HttpService) {}

  // 신청아이디 받아서 db에서 추출한다음 JSON으로 변환하기
  // 아이디만 받아서 db에서 꺼내자 //, openData: CreatorShinChungDto
  async openFunding(shinNo: number) {
    // result => object 일거임
    const result = this.prisma.shinchunghada.findUnique({
      where: { shin_no: shinNo },
    });
    const imgURL = (await result).shin_cover; // 이미지 url만 뽑기

    // db에서 뽑은 객체 JSON으로 변환하기
    // stringify json 문자열로 바꿔줌
    const metaData = JSON.stringify(result);

    this.getImageCID(imgURL);

    console.log("@@@@@");
    console.log(metaData);
    // JSON으로 변환한 메타데이터 파일로 저장하기
    this.saveMetaData(metaData, shinNo);

    // metaDATA 잘 저장됐는지 확인하기
    this.readMetaJson(shinNo);
  }

  // 파일저장해주기 // writeFileSync는 예외를 try{} catch{} 로 처리해줘야함
  // metaData: string 맞음 JSON.stringify() 가 우리가 보기엔 json 같지만 string타입임
  private saveMetaData(metaData: string, shinNo: number) {
    if (metaData) {
      // 파일저장할 경로, 기록될 데이터, 옵션함수
      fs.writeFile(`${shinNo}`, metaData, (err) => {
        if (err) {
          console.log(err);
          throw new Error("META 데이터 파일저장 실패");
        } else {
          console.log(" META 데이터 파일저장 성공! ");
        }
      });
    }
  }

  // 메타데이터 저장한 json 파일 확인/ 읽어오기
  private readMetaJson(shinNo: number) {
    fs.readFile(`${shinNo}.json`, "utf-8", (err, data) => {
      if (err) {
        console.error(err);
      } else {
        console.log("잘 저장했다");
        console.log(data);
      }
    });
  }

  // 이미지 경로 ipfs:// 로 바꾼다음에 저장해여함!!!

  // 피나타 api로 json 보내고 url 받아오기
  // npm install --save @pinata/sdk
  private postPinata(metaData: string) {
    const PINATA_API_KEY = this.config.get("PINATA_API_KEY");
    const PINATA_SCRETKET = this.config.get("PINATA_SECRET_KEY");

    // API키로 피나타 연결
    const pinata = new pinataSDK({ pinataApiKey: PINATA_API_KEY, pinataSecretApiKey: PINATA_SCRETKET });
    // 피나타 연결됐는지 확인
    pinata
      .testAuthentication()
      .then((result) => {
        console.log(result);
        // 연결 성공했다면 메타데이터 json 그대로 보내기
        // response 데이터 형태 밑에있음
        const response = pinata.pinJSONToIPFS(metaData);
      })
      .catch((err) => {
        console.log(err);
        throw new Error(" 피나타 연결 실패");
      });
  }

  /* response 형태
        {
            IpfsHash: This is the IPFS multi-hash provided back for your content,
            PinSize: This is how large (in bytes) the content you just pinned is,
            Timestamp: This is the timestamp for your content pinning (represented in ISO 8601 format)
        }
        */

  // 커버사진 IPFS로 올려서 주소 받기
  async getImageCID(imgURL: string) {
    const PINATA_TOKEN = this.config.get("PINATA_JWT_TOKEN");
    //const axiosInstance = axios.create()

    const SRC = imgURL; // 이미지 url

    // const axiosInstance = axios.create();
    const formData = new FormData();

    // axiosRef == AxiosInstance
    const response = await this.http.axiosRef(SRC, {
      method: "GET",
      responseType: "stream",
    });
    formData.append("file", response.data);

    try {
      // "Infinity"
      const res = await this.http.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
        maxBodyLength: 100,
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
          Authorization: PINATA_TOKEN,
        },
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    // const file = fs.createReadStream(src);
    // formData.append('coverIMG', file);
  }
}
