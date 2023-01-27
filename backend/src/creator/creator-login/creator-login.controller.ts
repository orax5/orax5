import { Body, Controller, Post } from '@nestjs/common';
import { CreatorLoginDto } from '../creator_dto/creator-login.dto';
import { AuthService } from '../../auth/auth.service';

@Controller('creator_login')
export class CreatorLoginController {
    constructor(private authService: AuthService ){}

    @Post()
    async creatorLogin(@Body() creatorLoginDto: CreatorLoginDto){
        console.log(creatorLoginDto);
        // auth 토큰 발급하는 로그인
        return this.authService.login(creatorLoginDto);
    }
}
