import { Controller, Post, Param } from "@nestjs/common";
import { DeleteService } from "./delete.service";

@Controller("deleteS3")
export class DeleteController {
  constructor(private deleteService: DeleteService) {}

  @Post("/:id")
  deleteS3image(@Param("id") s3filename: string) {
    return this.deleteService.deleteFile(s3filename);
  }
}
