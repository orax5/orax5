<<<<<<< HEAD
import { Module } from '@nestjs/common';
import { MypageModule } from './mypage/mypage.module';
import { AddmusicModule } from './addmusic/addmusic.module';

@Module({
    imports: [MypageModule, AddmusicModule],
    controllers: [],
    providers: []
})
export class AdminModule {}
=======
// import { Module } from '@nestjs/common';
// import { AdminShowfundlistController } from './admin-showfundlist/admin-showfundlist.controller';
// import { AdminShowfundlistService } from './admin-showfundlist/admin-showfundlist.service';

// @Module({
//   controllers: [AdminShowfundlistController],
//   providers: [AdminShowfundlistService]
// })
// export class AdminModule {}
>>>>>>> ab1d76c77237eed433f294d227fdef86b43930f2
