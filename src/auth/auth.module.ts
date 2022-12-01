import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {TypeOrmModule}  from "@nestjs/typeorm"
import { SomeEntity } from 'src/entities/user.entity';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategi';

@Module({
  imports:[TypeOrmModule.forFeature([SomeEntity]),PassportModule],
  controllers: [AuthController],
  providers: [AuthService,LocalStrategy]
})
export class AuthModule {}
