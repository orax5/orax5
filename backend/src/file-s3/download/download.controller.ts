import { Controller, Get, Header, Param, Res } from "@nestjs/common";
import { DownloadService } from "./download.service";
import { S3 } from "aws-sdk";
import { ConfigService } from "@nestjs/config";

//s3에서 음악파일 받아오는 곳
@Controller("downloadS3")
export class DownloadController {
  constructor(private readonly downService: DownloadService, private config: ConfigService) {}

  @Get("/:id")
  async downloadFileS3(@Res() res, @Param("id") musictitle: string) {
    const s3 = new S3();
    const params = {
      Buket: this.config.get("AWS_S3_BUCKET_NAME_MUSIC"),
      Key: musictitle,
    };

    try {
      const url = await s3.getSignedUrlPromise("getObject", params);
      return res.rediresct(url);
    } catch (error) {
      return res.status(500).send(error);
    }
  }
}
