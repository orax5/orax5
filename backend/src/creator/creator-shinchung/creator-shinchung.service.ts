import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class CreatorShinchungService {
    constructor(private readonly prisma: PrismaService){}

    async shinchungFund(){
        try {
            
            
        } catch (error) {
            
        }
    }
}
