import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { jwtConstant } from '../constants/jwt.constant';
import { Reflector } from '@nestjs/core';
import { User } from 'src/modules/users/entities/user.entity';
import { FullAccess } from 'src/modules/roles/entities/role.entity';

@Injectable()
export class AuthGuards implements CanActivate {
  private userPermissions: string[];
  constructor(private readonly jwt: JwtService, private readonly reflector: Reflector) { }
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    this.userPermissions = this.reflector.get<string[]>('has-permission', context.getHandler());
    const request = context.switchToHttp().getRequest();
    let token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException('No tienes acceso para realizar esta acción');
    }
    await this.verifyToken(token, request);
    return true;
  }
  private extractTokenFromHeader(request: Request): string | undefined {
    const { headers } = request;
    const { authorization } = headers;
    let [type, token] = authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
  private async verifyToken(token: string, request: Request) {
    try {
      const payload = await this.jwt.verifyAsync<User>(token, {
        secret: jwtConstant.secret,
      });
      request['user'] = payload;
      if (this.verifyRoles(payload)) {
        return true;
      } else {
        this.verifyPermissions(payload);
      }
    } catch (ex) {
      throw new UnauthorizedException("Verificando token");
    }
  }
  private verifyRoles(user: User) {
    let rol = user.roles.find(x => x.fullAccess === FullAccess.Yes);
    return rol ?? false;
  }
  private verifyPermissions(user: User) {
    let permissions = user.roles.flatMap((item) => {
      return item.permissions.map((perm) => perm.name);
    });
    console.log(this.userPermissions);
    if(!this.userPermissions){
      return true;
    }
    let hasPermissions = permissions.some(x => this.userPermissions.includes(x));
    console.log({hasPermissions});
    if (!hasPermissions) {
      throw new UnauthorizedException('No tienes permisos para realizar esta acción');
    }
  }
}
