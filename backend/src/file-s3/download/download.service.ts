import { Injectable, StreamableFile } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as AWS from "aws-sdk";
import { CacheService } from "../../cache/cache.service";

// aws-sdk v2 사용
@Injectable()
export class DownloadService {
  constructor(private readonly config: ConfigService, private readonly cache: CacheService) {}

  async downloadFileS3(musictitle: string) {
    // s3 인스턴스생성
    const s3 = new AWS.S3({
      region: this.config.get("AWS_REGION"),
      credentials: {
        accessKeyId: this.config.get("AWS_ACCESS_KEY_ID"),
        secretAccessKey: this.config.get("AWS_SECRET_ACCESS_KEY"),
      },
    });

    // 음악명 아이디로 받아와야할듯?
    // s3 버킷에 요청을 보내기위해 버킷 이름과 다운로드할 파일 경로
    const options = {
      Bucket: this.config.get("AWS_S3_BUCKET_NAME_MUSIC"), // 버킷이름, 여기선 음악파일버킷지정해둠
      Key: `${musictitle}`, // 버킷내 파일경로
    };

    const stream = s3.getObject(options).createReadStream();
    // 스트림을 파이핑해서 응답함, 이걸 redis에 저장하는 법은 없을까?
    const musicfile = new StreamableFile(stream);
    await this.cache.set(`${musictitle}`, musicfile);
    const result = await this.cache.get(`${musictitle}`);
    console.log("@@ 음악파일 다운받은것 : ", result);

    if (result == null || undefined) {
      return console.log("음악다운로드 실패");
    } else {
      return console.log("음악다운로드 성공 틀어보자");
    }
  }
}

/*
    mysql://root:1234@localhost:/divetospace?schema=public
@@@@ 컨트롤러 {
  filePath: 'https://divetospace.s3.ap-northeast-2.amazonaws.com/sample_1'
}
 key: 파일경로 적어줄때 저장한 이름만 치면되는것 같다

 ex)
 const key = `${Date.now() + '파일 데이터 이름'}`;
*/
