import { Controller, Get, Param } from '@nestjs/common';
import { UserInfo } from '../user_dto/UserInfo';



@Controller('user-mypage')
export class UserMypageController {

    // 마이 페이지에서 닉네임만 띄워주면 될듯 나머지는 컨트랙트에서 띄워줌
    @Get('/:id')
    async getUserInfo(@Param('id') userId: string): Promise<UserInfo>{
        console.log(userId);
        return;
    }
}
