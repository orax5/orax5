import { Controller, Post, Param, HttpException, HttpStatus } from "@nestjs/common";
import { OpenfundingService } from "./openfunding.service";
import { CreatorShinChungDto } from "../creator_dto/shinchung.dto";
import { HttpService } from "@nestjs/axios";

// 유저가 펀딩 오픈버튼 누르면 피나타로 쏴줄 컨트롤러
@Controller("openfunding")
export class OpenfundingController {
  constructor(private openService: OpenfundingService) {}

  @Post("/:id")
  postMetaData(@Param("id") shinId: string) {
    try {
      // 앞단에서 permit =2 여야 버튼 활성화 된다고했으니 다시물어보기
      // 아이디 뽑아서 숫자로 바꿔줌, db에서 조회할때 숫자로 해야하기때문
      console.log(shinId);
      const shinNo = parseInt(shinId);
      if (typeof shinNo === "number") {
        return this.openService.openFunding(shinNo);
      }
    } catch (error) {
      throw new HttpException("펀딩 아이디 추출 실패", HttpStatus.NOT_FOUND);
    }
  }

  // @Post('/ex')
  // imagePost(){
  //     console.log("올라가나 확인해보기");
  //     const url = "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/7PBF/image/b0KVeRRLDeOtIap0-KnApW1uW8Q"
  //     //this.openService.getImageCID(url);
  // }
}
