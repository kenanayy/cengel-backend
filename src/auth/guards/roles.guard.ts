// Sadece admin (yönetici) gibi özel rolü olan kişilerin yapabileceği işlemleri denetleyen bekçidir.

import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!requiredRoles) return true; // Rol kısıtı yoksa geç

    const { user } = context.switchToHttp().getRequest();
    return requiredRoles.includes(user.role);
  }
}
