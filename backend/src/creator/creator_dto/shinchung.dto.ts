import { IsString } from 'class-validator';

export class CreatorShinChungDto{
    
    shin_amount: any;

    shin_nft_totalbalance: any;

    @IsString()
    shin_cover: string;

    shin_opendate: any;
    
    @IsString()
    shin_description : string;

    @IsString()
    shin_category: string;
    
    shin_ispermit? : number; // 입력안하면 자동으로 1: 심사대기중

    @IsString()
    shin_creator_address: string;

    @IsString()
    com_name: string;

    @IsString()
    lyric_name: string;

    @IsString()
    sing_name: string;

    fund_state?: number;
}