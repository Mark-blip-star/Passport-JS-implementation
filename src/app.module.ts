import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SomeEntity } from './entities/user.entity';
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: "wizwork-dev.cbepjlwtmj6m.ca-central-1.rds.amazonaws.com",
    port: 3306,
    username: "ww_admin",
    password: "9G5IN^^fD8",
    database: "wizwork-dev",
    synchronize:true,
    entities:[SomeEntity]
  }), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
