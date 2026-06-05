// Güvenliğin beynidir. Şifreleri bcrypt ile hashler (kriptolar) ve giriş yapanlara JWT (Token) kimliği üretir.

import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';
import { Player } from '../players/player.entity';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Player)
    private playersRepo: Repository<Player>,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  // --- KAYIT ---
  async register(dto: RegisterDto): Promise<Player> {
    // Kullanıcı adı var mı kontrol et
    const existing = await this.playersRepo.findOneBy({ username: dto.username });
    if (existing) throw new ConflictException('Bu kullanıcı adı zaten alınmış');

    // Şifreyi hashle
    const hashedPassword = await bcrypt.hash(dto.password, 10);

    // Oyuncuyu kaydet
    const player = this.playersRepo.create({
      ...dto,
      password: hashedPassword,
    });
    return this.playersRepo.save(player);
  }

  // --- KİMLİK DOĞRULAMA (Passport Local için) ---
  async validatePlayer(username: string, password: string): Promise<Player> {
    const player = await this.playersRepo.findOneBy({ username });
    if (!player) throw new UnauthorizedException('Kullanıcı bulunamadı');

    const isMatch = await bcrypt.compare(password, player.password);
    if (!isMatch) throw new UnauthorizedException('Şifre yanlış');

    return player;
  }

  // --- GİRİŞ — Token üret ---
  async login(player: Player) {
    const payload = { sub: player.id, username: player.username, role: player.role };

    const accessToken = this.jwtService.sign(payload);
    const refreshToken = this.jwtService.sign(payload, {
      secret: this.configService.get('JWT_REFRESH_SECRET'),
      expiresIn: this.configService.get('JWT_REFRESH_EXPIRES_IN'),
    });

    // Refresh token'ı hashleyerek DB'ye kaydet
    const hashed = await bcrypt.hash(refreshToken, 10);
    await this.playersRepo.update(player.id, { refreshToken: hashed });

    return { accessToken, refreshToken };
  }

  // --- ÇIKIŞ ---
  async logout(playerId: number): Promise<void> {
    await this.playersRepo.update(playerId, { refreshToken: '' });
  }
}
