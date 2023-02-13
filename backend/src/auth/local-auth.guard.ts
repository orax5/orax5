import { Injectable, ExecutionContext } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";

@Injectable()
export class LocalAuthGuard extends AuthGuard("local") {
  async canActive(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    return await this.validateRequest(request);
  }

  private async validateRequest(request: any): Promise<boolean> {
    // 요청객체에 포함된 정보 분석해서 권한 있는지 판단하는 함수
    // 여기에서 스트리밍권있는지 없는지 확인하던가 유저 등급판단
    return true;
  }
}

/*
   async canActive(context: ExecutionContext): Promise<boolean>{
        const can = await super.canActivate(context);
        if(can){
            const request = context.switchToHttp().getRequest();
            console.log('login for cookie');
            await super.logIn(request);
        }
        return true;
    }
*/
