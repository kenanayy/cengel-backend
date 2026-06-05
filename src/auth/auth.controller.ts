// /auth/register ve /auth/login adreslerine gelen Kayıt ve Giriş isteklerini yakalar.

import { Controller, Post, Body, UseGuards, Request, Get, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // POST /auth/register — Yeni oyuncu kaydı
  @Post('register')
  async register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  // POST /auth/login — Giriş, LocalGuard şifreyi kontrol eder
  @UseGuards(LocalAuthGuard)
  @Post('login')
  @HttpCode(200)
  async login(@Request() req: any) {
    return this.authService.login(req.user);
  }

  // GET /auth/profile — JWT gerekli, kendi profilini görür
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req: any) {
    return req.user;
  }

  // POST /auth/logout — JWT gerekli
  @UseGuards(JwtAuthGuard)
  @Post('logout')
  @HttpCode(200)
  async logout(@Request() req: any) {
    await this.authService.logout(req.user.id);
    return { message: 'Başarıyla çıkış yapıldı' };
  }
}
