import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/LoginDto';
import { JwtService } from "@nestjs/jwt";
@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService, private readonly jwt: JwtService) { }
    async login({ email, password }: LoginDto) {
        let user = await this.userService.findOneByEmail(email);
        if (!user) {
            throw new UnauthorizedException('Email incorrecto');
        }
        const payload = {email: user.email, sub: user.id};
        const token = await this.jwt.signAsync(payload);
        return {
            token,
            user
        };
    }
}
