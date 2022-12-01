import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
        console.log(1)
      return req.user;
    }
}
