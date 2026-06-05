// Sadece Giriş (Login) esnasında çalışıp, girilen şifre ile veritabanındaki hashli şifrenin eşleşip eşleşmediğini kontrol eder.

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'username' }); // request body'deki alan adı
  }

  async validate(username: string, password: string) {
    const player = await this.authService.validatePlayer(username, password);
    // Hata varsa authService zaten exception fırlatır
    return player; // request.user'a atanır
  }
}
