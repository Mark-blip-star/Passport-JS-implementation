import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SomeEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
    constructor(@InjectRepository(SomeEntity) private readonly userRepo:Repository<SomeEntity>){

    }

    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.userRepo.findOne({where:{email:email}});
        if (user && user.password === pass) {
          const { password, ...result } = user;
          return result;
        }
        return null;
      }
}
