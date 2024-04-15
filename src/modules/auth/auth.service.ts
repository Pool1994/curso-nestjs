import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
@Injectable()
export class AuthService {
    constructor(private readonly userService:UsersService) { }
    async login (email:string,password:string){
        return this.userService.findOneByEmail(email);
    }
}
